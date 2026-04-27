export enum ModuleCategory {
  PERANGKAT = "Pengembangan Perangkat",
  PEDAGOGIK = "Pedagogik",
  PROFESIONAL = "Profesional",
  PARENTING = "Parenting & Keluarga",
  PSIKOLOGI = "Psikologi Anak",
  HIJRIYAH = "Bulan Hijriyah & Kisah",
  PROPHETS = "Kisah 25 Nabi & Rasul",
  ANGELS = "10 Malaikat & Tugasnya",
  PILLARS = "Rukun Iman & Islam",
  ASMAUL_HUSNA = "99 Asmaul Husna",
  MAHFUDZAT = "100 Mahfudzat",
  ARBAIN = "42 Hadits Arba'in",
  KODE_ETIK_GURU = "Kode Etik Guru",
  SAHABAT = "200 Kisah Sahabat Nabi",
}

export interface Section {
  title: string;
  content: string;
  explanation?: string; // Add this
  subsections?: { title: string; content: string; explanation?: string }[];
  learningActivity?: string; 
  dailyLife?: string;      
  visualization?: {
    type: 'workflow' | 'concept-map' | 'comparison' | 'code';
    data: any;
  };
}

export interface Topic {
  id: string;
  title: string;
  category: ModuleCategory;
  summary: string;
  sections: Section[];
  readingMaterial?: string; // Long form text
}
