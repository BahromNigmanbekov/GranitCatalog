import { useState } from "react";
import type { ColorFamily, StoneType } from "../data/stones";
import { COLOR_LABELS, TYPE_LABELS } from "../data/stones";
import { EMPTY_FORM_VALUES, type ProductFormValues, type ProjectDraft } from "./formUtils";

const TYPE_OPTIONS = Object.keys(TYPE_LABELS) as StoneType[];
const COLOR_OPTIONS = Object.keys(COLOR_LABELS) as ColorFamily[];

interface Props {
  title: string;
  submitLabel: string;
  initial?: ProductFormValues;
  existingImage?: string;
  initialProjects?: ProjectDraft[];
  onSubmit: (values: ProductFormValues, file: File | null, projects: ProjectDraft[]) => Promise<void>;
  onCancel?: () => void;
}

export function ProductForm({
  title,
  submitLabel,
  initial,
  existingImage,
  initialProjects,
  onSubmit,
  onCancel,
}: Props) {
  const [values, setValues] = useState<ProductFormValues>(initial ?? EMPTY_FORM_VALUES);
  const [file, setFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [projects, setProjects] = useState<ProjectDraft[]>(initialProjects ?? []);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);

  function set<K extends keyof ProductFormValues>(key: K, value: ProductFormValues[K]) {
    setValues((v) => ({ ...v, [key]: value }));
  }

  function addProjectPhoto(f: File) {
    setProjects((prev) => [
      ...prev,
      { key: `new-${Date.now()}-${Math.random()}`, image: null, file: f, previewUrl: URL.createObjectURL(f), caption: "" },
    ]);
  }

  function updateProjectCaption(key: string, caption: string) {
    setProjects((prev) => prev.map((p) => (p.key === key ? { ...p, caption } : p)));
  }

  function removeProject(key: string) {
    setProjects((prev) => prev.filter((p) => p.key !== key));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!values.name.trim()) {
      setError("Nomi kiritilishi shart.");
      return;
    }
    if (!file && !existingImage) {
      setError("Rasm tanlanishi shart.");
      return;
    }
    setSaving(true);
    setError(null);
    try {
      await onSubmit(values, file, projects);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Xatolik yuz berdi.");
      setSaving(false);
    }
  }

  return (
    <form className="admin-form" onSubmit={handleSubmit}>
      <h2 className="admin-section-title">{title}</h2>

      {error && <p className="admin-error">{error}</p>}

      <div className="admin-grid-2">
        <label className="admin-field">
          <span>Nomi *</span>
          <input value={values.name} onChange={(e) => set("name", e.target.value)} required />
        </label>
        <label className="admin-field">
          <span>Kelib chiqishi</span>
          <input value={values.origin} onChange={(e) => set("origin", e.target.value)} />
        </label>
        <label className="admin-field">
          <span>Turi</span>
          <select value={values.type} onChange={(e) => set("type", e.target.value as StoneType)}>
            {TYPE_OPTIONS.map((t) => (
              <option key={t} value={t}>{TYPE_LABELS[t]}</option>
            ))}
          </select>
        </label>
        <label className="admin-field">
          <span>Rang oilasi</span>
          <select value={values.colorFamily} onChange={(e) => set("colorFamily", e.target.value as ColorFamily)}>
            {COLOR_OPTIONS.map((c) => (
              <option key={c} value={c}>{COLOR_LABELS[c]}</option>
            ))}
          </select>
        </label>
        <label className="admin-field">
          <span>Ishlov turlari (vergul bilan)</span>
          <input value={values.finish} onChange={(e) => set("finish", e.target.value)} placeholder="polirovka, termo" />
        </label>
        <label className="admin-field">
          <span>Qo'llanilishi (vergul bilan)</span>
          <input value={values.application} onChange={(e) => set("application", e.target.value)} placeholder="pol, fasad" />
        </label>
        <label className="admin-field">
          <span>Qalinlik</span>
          <input value={values.thickness} onChange={(e) => set("thickness", e.target.value)} placeholder="20 mm / 30 mm" />
        </label>
        <label className="admin-field">
          <span>Formatlar</span>
          <input value={values.formats} onChange={(e) => set("formats", e.target.value)} placeholder="600×300, 600×600, plita" />
        </label>
        <label className="admin-field">
          <span>Qattiqlik</span>
          <input value={values.hardness} onChange={(e) => set("hardness", e.target.value)} placeholder="6–7 Mos" />
        </label>
        <label className="admin-field">
          <span>Namlik shimish</span>
          <input value={values.absorption} onChange={(e) => set("absorption", e.target.value)} placeholder="past" />
        </label>
      </div>

      <label className="admin-field">
        <span>Tavsif</span>
        <textarea rows={3} value={values.description} onChange={(e) => set("description", e.target.value)} />
      </label>

      <label className="admin-field admin-checkbox">
        <input type="checkbox" checked={values.featured} onChange={(e) => set("featured", e.target.checked)} />
        <span>Ajratib ko'rsatish (featured)</span>
      </label>

      <label className="admin-field">
        <span>Rasm {existingImage ? "(almashtirish uchun tanlang, aks holda eskisi qoladi)" : "*"}</span>
        <input
          type="file"
          accept="image/*"
          onChange={(e) => {
            const f = e.target.files?.[0] ?? null;
            setFile(f);
            setPreview(f ? URL.createObjectURL(f) : null);
          }}
        />
      </label>

      {(preview || existingImage) && (
        <img className="admin-preview" src={preview ?? existingImage} alt="Oldindan ko'rish" />
      )}

      <div className="admin-field">
        <span>Tugallangan ishlar rasmlari</span>

        {projects.length > 0 && (
          <div className="admin-project-list">
            {projects.map((p) => (
              <div className="admin-project-row" key={p.key}>
                <img className="admin-project-thumb" src={p.previewUrl ?? p.image ?? ""} alt="" />
                <input
                  className="admin-project-caption"
                  placeholder="Izoh, masalan: Zinapoya, xususiy uy"
                  value={p.caption}
                  onChange={(e) => updateProjectCaption(p.key, e.target.value)}
                />
                <button type="button" className="admin-btn admin-btn-danger" onClick={() => removeProject(p.key)}>
                  O'chirish
                </button>
              </div>
            ))}
          </div>
        )}

        <input
          type="file"
          accept="image/*"
          onChange={(e) => {
            const f = e.target.files?.[0] ?? null;
            if (f) addProjectPhoto(f);
            e.target.value = "";
          }}
        />
        <span className="admin-hint">Har safar rasm tanlaganingizda, ro'yxatga yangi qator qo'shiladi. Bir nechta rasm qo'shishingiz mumkin.</span>
      </div>

      <div className="admin-form-actions">
        <button type="submit" className="admin-btn admin-btn-primary" disabled={saving}>
          {saving ? "Saqlanmoqda..." : submitLabel}
        </button>
        {onCancel && (
          <button type="button" className="admin-btn" onClick={onCancel} disabled={saving}>
            Bekor qilish
          </button>
        )}
      </div>
    </form>
  );
}
