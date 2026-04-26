export enum ModuleCategory {
  PERANGKAT = "Pengembangan Perangkat",
  PEDAGOGIK = "Pedagogik",
  PROFESIONAL = "Profesional",
  SMP_7 = "PAI Kelas VII",
  SMP_8 = "PAI Kelas VIII",
  SMP_9 = "PAI Kelas IX",
  PARENTING = "Parenting & Keluarga",
  PSIKOLOGI = "Psikologi Anak"
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
