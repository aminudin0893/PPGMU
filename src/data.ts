import { ModuleCategory, Topic } from "./types";

export const TOPICS: Topic[] = [
  // ==========================================
  // PROFESIONAL (8 MODUL)
  // ==========================================
  {
    id: "prof-1",
    title: "Al-Qur'an: Muhkamat & Mutasyabihat",
    category: ModuleCategory.PROFESIONAL,
    summary: "Klasifikasi ayat Al-Qur'an berdasarkan kejelasan makna dan metodologi penafsiran ulama.",
    sections: [
      {
        title: "Konsep Dasar",
        content: "Al-Qur'an terdiri dari ayat Muhkamat sebagai fondasi hukum dan Mutasyabihat sebagai ujian intelektual.",
        subsections: [
          { 
            title: "Muhkamat", 
            content: "Ayat yang maknanya jelas (mubayyan).",
            explanation: "Ayat ini bersifat pasti (qat'i) dan tidak memerlukan penafsiran panjang untuk dipahami maksud hukumnya, seperti perintah shalat dan zakat."
          },
          { 
            title: "Mutasyabihat", 
            content: "Ayat yang maknanya samar (zanni).",
            explanation: "Ayat ini mengandung makna yang hanya diketahui hakikatnya oleh Allah, atau memerlukan takwil jika menyangkut sifat-sifat Allah agar tidak terjebak pada penyerupaan (tasybih)."
          }
        ],
        learningActivity: "Guru meminta siswa memilah 5 ayat dari surat pendek: mana yang bercerita tentang hukum tetap (Muhkam) dan mana yang menggunakan bahasa kiasan/sifat Allah (Mutasyabih).",
        dailyLife: "Menerapkan sikap rendah hati (tawadhu) saat menemui hal-hal yang belum dipahami dalam agama, tidak memaksakan logika pada rahasia Ilahi.",
        visualization: {
          type: 'comparison',
          data: { left: "Muhkamat (Pasti/Textual)", right: "Mutasyabihat (Zanni/Interpretative)" }
        }
      }
    ],
    readingMaterial: "Ulama Salaf cenderung melakukan Tafwidh (menyerahkan makna kepada Allah) sementara Khalaf melakukan Takwil (interpretasi yang layak bagi Allah) terhadap ayat Mutasyabihat. Dalam kehidupan sehari-hari, kita fokus mengamalkan yang Muhkam dan tidak berdebat kusir pada yang Mutasyabih."
  },
  {
    id: "prof-2",
    title: "Hadis: Kriteria Kesahihan",
    category: ModuleCategory.PROFESIONAL,
    summary: "Standar metodologis kritik sanad dan matan untuk memastikan otoritas sabda Nabi.",
    sections: [
      {
        title: "Lima Syarat Sahih",
        content: "Hadis dinyatakan sahih jika memenuhi syarat kumulatif sanad dan matan.",
        explanation: "Kesahihan hadis bukan hanya soal siapa perawinya, tapi juga kebersambungan rantai informasi tanpa ada cacat tersembunyi.",
        learningActivity: "Siswa melakukan simulasi 'Permainan Pesan Berantai' untuk memahami bagaimana informasi bisa berubah jika perawinya tidak teliti (Dhabith) atau tidak jujur (Adil).",
        dailyLife: "Melakukan 'Saring sebelum Sharing' saat menerima berita di media sosial untuk menghindari fitnah dan hoax.",
        visualization: {
          type: 'workflow',
          data: ["Sanad Bersambung", "Perawi Adil", "Perawi Dhabith", "Tidak Syadz", "Tidak 'Illat"]
        }
      }
    ],
    readingMaterial: "Ittishal as-Sanad menjamin informasi tersampaikan secara valid dari guru ke guru hingga Rasulullah. 'Adalah menjamin moralitas, sementara Dhabith menjamin intelektualitas perawi. Contoh: Memverifikasi berita viral (tabayyun) meniru pola kritik hadis ini."
  },
  {
    id: "prof-3",
    title: "Akidah: Takdir & Mukjizat",
    category: ModuleCategory.PROFESIONAL,
    summary: "Memahami Qada/Qadar serta fenomena luar biasa bagi Nabi (Mukjizat) dan Wali (Karomah).",
    sections: [
      {
        title: "Sistem Takdir",
        content: "Keseimbangan antara ketetapan Allah dan ikhtiar manusia.",
        subsections: [
          { 
            title: "Qada Mu'allaq", 
            content: "Dapat berubah dengan doa dan usaha.",
            explanation: "Contohnya adalah kesehatan dan rezeki. Meskipun sudah ditulis, Allah memberi ruang bagi manusia untuk menjemputnya melalui gaya hidup sehat dan kerja keras."
          },
          { 
            title: "Qada Mubram", 
            content: "Ketetapan mutlak Allah.",
            explanation: "Hal ini meliputi kelahiran, kematian, dan jenis kelamin saat lahir yang tidak bisa diganggu gugat oleh keinginan manusia."
          }
        ],
        learningActivity: "Metode Diskusi Kelompok: Menganalisis kasus seorang siswa yang pintar tapi gagal ujian karena tidak belajar, dikaitkan dengan konsep Mu'allaq.",
        dailyLife: "Tetap optimis mengejar cita-cita (Mu'allaq) namun ikhlas menerima kegagalan setelah berusaha maksimal (Mubram).",
      }
    ],
    readingMaterial: "Mukjizat berfungsi sebagai bukti kenabian untuk melemahkan musuh Allah. Karomah adalah kemuliaan bagi hamba saleh yang istiqomah. Hidup seimbang berarti bekerja keras untuk Qada Muallaq namun tawakal pada Qada Mubram."
  },
  {
    id: "prof-4",
    title: "Akhlak: Potensi Jiwa (Quwwah)",
    category: ModuleCategory.PROFESIONAL,
    summary: "Integrasi potensi jiwa untuk melahirkan perilaku mulia yang spontan.",
    sections: [
      {
        title: "Empat Kekuatan Jiwa",
        content: "Akhlak mulia lahir dari keseimbangan kekuatan akal, emosi, dan nafsu.",
        explanation: "Konsep ini disebut Itidal (Keseimbangan). Jika salah satu potensi mendominasi tanpa bimbingan akal dan wahyu, perilaku manusia akan menyimpang.",
        learningActivity: "Simulasi Peran: Siswa memerankan tokoh yang sedang marah (Ghadhab) dan bagaimana menyeimbangkannya dengan akal (Hikmah).",
        dailyLife: "Mampu menahan diri untuk tidak membeli barang yang tidak perlu (Iffah) meskipun ada nafsu untuk memilikinya.",
        visualization: {
          type: 'concept-map',
          data: ["Al-Ilmi (Hikmah)", "Al-Ghadhab (Syaja'ah)", "Ash-Shahwat ('Iffah)", "Al-Adalah (Keadilan)"]
        }
      }
    ],
    readingMaterial: "Jika akal mendominasi amarah, lahirlah keberanian (Syaja'ah). Jika akal mendominasi nafsu, lahirlah kesucian diri ('Iffah). Adil adalah menaruh setiap potensi pada tempat yang semestinya sesuai bimbingan syariat."
  },
  {
    id: "prof-5",
    title: "Fikih: Ekonomi Syariah",
    category: ModuleCategory.PROFESIONAL,
    summary: "Penerapan prinsip keadilan dalam transaksi keuangan modern.",
    sections: [
      {
        title: "Larangan Riba",
        content: "Riba adalah tambahan yang dzalim. Islam menawarkan alternatif sistem bagi hasil (Mudharabah).",
        subsections: [
          { title: "Zakat Profesi", content: "Kewajiban zakat 2.5% dari penghasilan halal di era modern." }
        ]
      }
    ],
    readingMaterial: "Fikih kontemporer menjawab tantangan perbankan, asuransi, dan pasar modal syariah. Prinsipnya adalah 'An-Taradhin' (saling ridha) dan bebas dari unsur gharar (ketidakjelasan) serta maysir (spekulasi/judi)."
  },
  {
    id: "prof-6",
    title: "SKI: Khulafaur Rasyidin",
    category: ModuleCategory.PROFESIONAL,
    summary: "Model kepemimpinan islami pasca-kenabian yang berorientasi pada keadilan.",
    sections: [
      {
        title: "Karakter Pemimpin",
        content: "Setiap Khalifah membawa inovasi administrasi dan keteguhan iman.",
        subsections: [
          { title: "Umar bin Khattab", content: "Inovator administrasi keuangan negara dan kalender hijriah." },
          { title: "Utsman bin Affan", content: "Standardisasi penulisan Al-Qur'an (Mushaf Utsmani)." }
        ]
      }
    ],
    readingMaterial: "Pelajaran utama dari SKI adalah bagaimana nilai Islam mampu bertransformasi menjadi sistem peradaban yang inklusif. Di era sekarang, musyawarah dalam keluarga atau organisasi adalah tiruan dari gaya kepemimpinan mereka."
  },
  {
    id: "prof-7",
    title: "PAI: Pendidikan Nilai Karakter",
    category: ModuleCategory.PROFESIONAL,
    summary: "Integrasi 4 sifat Nabi dalam pembentukan kepribadian muslim progresif.",
    sections: [
      {
        title: "Pilar Karakter",
        content: "Menuju profil pelajar yang mencerminkan integritas kerasulan.",
        explanation: "Empat sifat ini bukan hanya untuk Nabi, tapi adalah standar manajemen diri bagi setiap muslim dalam profesi apa pun.",
        learningActivity: "Projek Literasi: Menulis esai tentang tokoh masa kini yang mencerminkan salah satu dari 4 sifat Nabi.",
        dailyLife: "Melaksanakan amanah tugas sekolah tanpa harus diawasi oleh guru atau orang tua.",
        visualization: {
          type: 'concept-map',
          data: ["Siddiq", "Amanah", "Tabligh", "Fathanah"]
        }
      }
    ],
    readingMaterial: "Pendidikan karakter bukan sekadar hafalan doa, tapi pembiasaan (habituasi). Jika guru memberikan teladan jujur (Siddiq) dan cerdas emosional (Fathanah), maka siswa akan lebih mudah menyerap nilai tersebut."
  },
  {
    id: "prof-8",
    title: "Kontemporer: Moderasi Beragama",
    category: ModuleCategory.PROFESIONAL,
    summary: "Islam Wasathiyah sebagai solusi kerukunan di tengah keberagaman.",
    sections: [
      {
        title: "Indikator Moderasi",
        content: "Sikap tengah yang menjauhi radikalisme (ekstrim kanan) dan liberalisme (ekstrim kiri).",
        subsections: [
          { title: "Komitmen Kebangsaan", content: "Menerima Pancasila sebagai kesepakatan akhir bangsa." },
          { title: "Toleransi", content: "Menghormati perbedaan tanpa harus membenarkan keyakinan orang lain." }
        ]
      }
    ],
    readingMaterial: "Moderasi Beragama adalah cara pandang, sikap, dan praktik beragama dalam kehidupan bersama dengan cara mengejawantahkan esensi ajaran agama yang melindungi martabat kemanusiaan dan membangun kemaslahatan umum."
  },

  // ==========================================
  // PEDAGOGIK (8 MODUL)
  // ==========================================
  {
    id: "ped-1",
    title: "Teori & Model Pembelajaran",
    category: ModuleCategory.PEDAGOGIK,
    summary: "Transformasi paradigma mengajar dari berpusat pada guru menjadi berpusat pada siswa.",
    sections: [
      {
        title: "Model PBL & PjBL",
        content: "Menggunakan masalah nyata (Problem) atau proyek (Project) sebagai pemantik nalar kritis.",
        explanation: "PBL melatih siswa memecahkan masalah kognitif, sedangkan PjBL menghasilkan artefak nyata sebagai bukti kompetensi.",
        learningActivity: "Siswa diminta merancang 'Kampanye Anti-Hoax' (PjBL) setelah menganalisis dampak berita bohong terhadap kerukunan (PBL).",
        dailyLife: "Menerapkan kerangka solusi saat menghadapi konflik di lingkungan rumah dengan cara mencari akar masalah terlebih dahulu.",
        visualization: {
          type: 'comparison',
          data: { left: "PBL (Solusi Masalah)", right: "PjBL (Produk Nyata)" }
        }
      }
    ],
    readingMaterial: "Sintak PBL dimulai dengan orientasi masalah, sementara PjBL dimulai dengan pertanyaan mendasar yang mengarah pada pembuatan karya. Keduanya bertujuan agar siswa memiliki 'HOTS' (Higher Order Thinking Skills)."
  },
  {
    id: "ped-2",
    title: "Pembelajaran Berdiferensiasi",
    category: ModuleCategory.PEDAGOGIK,
    summary: "Menghargai keunikan siswa melalui penyesuaian materi dan gaya belajar.",
    sections: [
      {
        title: "Tiga Aspek Differentiations",
        content: "Guru memodifikasi elemen kelas berdasarkan kesiapan (readiness) dan minat siswa.",
        explanation: "Keadilan dalam pendidikan bukan berarti menyamaratakan semua, tapi memberikan apa yang dibutuhkan oleh tingkat kognitif masing-masing anak.",
        subsections: [
          { 
            title: "Konten", 
            content: "Variasi materi ajar.",
            explanation: "Menyediakan bacaan tingkat dasar bagi yang baru mengenal dan bacaan tingkat lanjut bagi yang sudah mahir."
          },
          { 
            title: "Proses", 
            content: "Variasi aktivitas.",
            explanation: "Ada yang belajar melalui video, ada yang melalui games, ada yang melalui bacaan teks." 
          },
          { 
            title: "Produk", 
            content: "Variasi hasil karya.",
            explanation: "Siswa boleh memilih mengumpulkan tugas dalam bentuk video, poster, atau makalah."
          }
        ],
        learningActivity: "Memberikan 3 pilihan tugas setelah bab Sejarah Islam: membuat video TikTok sejarah, menulis artikel, atau menggambar peta rute hijrah.",
        dailyLife: "Menghargai perbedaan pendapat dalam keluarga dengan cara berkomunikasi sesuai dengan bahasa kasih masing-masing anggota.",
        visualization: {
          type: 'concept-map',
          data: ["Konten", "Proses", "Produk"]
        }
      }
    ],
    readingMaterial: "Diferensiasi bukan berarti mengajar satu per satu, tapi memberikan pilihan jalur belajar (visual, audio, kinestetik) agar semua anak merasa difasilitasi sesuai fitrahnya."
  },
  {
    id: "ped-3",
    title: "Kerangka TPACK Berkelanjutan",
    category: ModuleCategory.PEDAGOGIK,
    summary: "Sinergi Pengetahuan Teknologi, Pedagogi, dan Konten Materi PAI.",
    sections: [
      {
        title: "Irisan Pengetahuan",
        content: "Kemampuan guru mengintegrasikan tool digital secara bermakna pada materi PAI.",
        explanation: "TPACK bukan sekadar tentang canggihnya alat, tapi tentang ketepatan alat tersebut dalam menyalurkan pesan pedagogis.",
        learningActivity: "Self-Assessment Guru: Menilai diri sendiri di level mana penguasaan T, P, dan C-nya menggunakan kuesioner mandiri.",
        dailyLife: "Menggunakan aplikasi pengingat waktu shalat atau Al-Qur'an digital untuk meningkatkan kualitas ibadah harian.",
        visualization: {
          type: 'workflow',
          data: ["Content Knowledge", "Pedagogical Knowledge", "Technological Knowledge", "TPACK Result"]
        }
      }
    ],
    readingMaterial: "Syarat TPACK bukan sekadar memakai laptop, tapi tahu alat mana yang paling pas untuk menjelaskan materi tertentu. Misal: Pakai AR (Augmented Reality) untuk menjelaskan rukun Haji."
  },
  {
    id: "ped-4",
    title: "Deep Learning (DL) Strategy",
    category: ModuleCategory.PEDAGOGIK,
    summary: "Menciptakan kedalaman makna dalam setiap interaksi belajar di kelas.",
    sections: [
      {
        title: "Mindful, Meaningful, Joyful",
        content: "Pembelajaran yang menyentuh hati (psikologis) serta pikiran (kognitif).",
        subsections: [
          { title: "Meaningful", content: "Siswa tahu untuk apa mereka mempelajari bab ini bagi hidup mereka." }
        ]
      }
    ],
    readingMaterial: "Deep Learning mencegah siswa belajar hanya untuk ujian. Guru harus mampu memantik rasa ingin tahu (curiosity) sehingga siswa merasa butuh akan ilmu tersebut (Meaningful Learning)."
  },
  {
    id: "ped-5",
    title: "Asesmen & Evaluasi",
    category: ModuleCategory.PEDAGOGIK,
    summary: "Mengukur kemajuan belajar melalui asesmen yang mendidik (Assessment for Learning).",
    sections: [
      {
        title: "Formatif vs Sumatif",
        content: "Fokus lebih besar pada proses (Formatif) daripada sekadar angka akhir (Sumatif).",
        explanation: "Asesmen formatif bertujuan untuk memperbaiki cara belajar, sedangkan sumatif untuk melaporkan hasil belajar.",
        learningActivity: "Peer-Feedback: Siswa saling mengoreksi hafalan ayat secara bergantian dan memberikan masukan yang membangun.",
        dailyLife: "Melakukan refleksi diri setiap malam sebelum tidur (Muhaasabah) sebagai 'asesmen formatif' bagi perilaku hari itu.",
        visualization: {
          type: 'comparison',
          data: { left: "Formatif (Proses/Feedback)", right: "Sumatif (Hasil/Nilai)" }
        }
      }
    ],
    readingMaterial: "Asesmen formatif ibarat koki mencicipi masakan saat dimasak untuk memperbaiki rasa. Asesmen sumatif ibarat tamu memakan hasil akhir masakan tersebut."
  },
  {
    id: "ped-6",
    title: "Psikologi Peserta Didik",
    category: ModuleCategory.PEDAGOGIK,
    summary: "Memahami karakteristik mental Gen Z dan Alpha yang serba digital.",
    sections: [
      {
        title: "Gaya Belajar Generasi",
        content: "Peserta didik masa kini memerlukan umpan balik instan dan visualisasi tinggi.",
        subsections: [
          { title: "Mental Alpha", content: "Visual learner, multitasking, dan butuh kebebasan eksplorasi." }
        ]
      }
    ],
    readingMaterial: "Guru tidak bisa lagi hanya menggunakan metode ceramah satu jam penuh. Guru harus berperan sebagai fasilitator yang memberikan ruang berekspresi bagi keunikan mental mereka."
  },
  {
    id: "ped-7",
    title: "Pendidikan Inklusif",
    category: ModuleCategory.PEDAGOGIK,
    summary: "Akses pendidikan yang setara bagi Anak Berkebutuhan Khusus di sekolah reguler.",
    sections: [
      {
        title: "Akomodasi Kurikulum",
        content: "Modifikasi materi agar bisa diakses oleh siswa disabilitas (netra, rungu, dll).",
        visualization: {
          type: 'concept-map',
          data: ["Aksesibilitas", "Modifikasi", "Adaptasi", "Fleksibilitas"]
        }
      }
    ],
    readingMaterial: "Inklusi adalah tentang sikap ramah terhadap semua orang. Di kelas PAI, inklusi bermakna memberikan kesempatan yang sama bagi setiap anak untuk mengenal Tuhannya tanpa terkecuali."
  },
  {
    id: "ped-8",
    title: "Guru di Era Adaptif AI",
    category: ModuleCategory.PEDAGOGIK,
    summary: "Transformasi peran guru menjadi mentor moral di tengah gempuran kecerdasan buatan.",
    sections: [
      {
        title: "AI as Assistant",
        content: "AI membantu administrasi dan personifikasi soal, Guru membantu pembentukan batin.",
        visualization: {
          type: 'workflow',
          data: ["Input Data", "Analisis AI", "Feedback Guru", "Karakter Siswa"]
        }
      }
    ],
    readingMaterial: "AI bisa memberikan jawaban apa saja, tapi AI tidak bisa memberikan kasih sayang dan teladan akhlak. Peran guru kini adalah 'Ethics Guardian' bagi penggunaan teknologi di kalangan siswa."
  },

  // ==========================================
  // PERANGKAT (8 MODUL)
  // ==========================================
  {
    id: "per-1",
    title: "Analisis CP & Penurunan TP",
    category: ModuleCategory.PERANGKAT,
    summary: "Membedah Capaian Pembelajaran (Fase) menjadi Tujuan (Pertemuan) yang terukur.",
    sections: [
      {
        title: "Prosedur Analisis",
        content: "Mencari kata kerja operasional (Kompetensi) dan lingkup materi di dalam paragraf CP.",
        explanation: "Analisis ini membantu guru agar tidak 'tersesat' dalam keluasan materi dan tetap fokus pada inti kompetensi yang diminta kurikulum.",
        learningActivity: "Workshop Guru: Menandai kata kerja (misal: 'menganalisis', 'mengevaluasi') pada dokumen CP untuk dijadikan indikator TP.",
        dailyLife: "Membreakdown tujuan besar (seperti renovasi rumah) menjadi langkah-langkah kecil yang bisa dikerjakan mingguan.",
        visualization: {
          type: 'workflow',
          data: ["Baca CP", "Cari Kompetensi", "Tentukan Materi", "Susun TP"]
        }
      }
    ],
    readingMaterial: "Capaian Pembelajaran (CP) bersifat holistik. Guru harus jeli melakukan 'penurunan' agar target belajar di setiap pertemuan menjadi logis dan tidak terlalu membebani siswa."
  },
  {
    id: "per-2",
    title: "Susun ATP & Modul Ajar",
    category: ModuleCategory.PERANGKAT,
    summary: "Merancang alur linear pembelajaran (ATP) dan dokumen operasional kelas (Modul Ajar).",
    sections: [
      {
        title: "Komponen Modul",
        content: "Modul ajar harus memuat tujuan, langkah, asesmen, dan media secara sinkron.",
        subsections: [
          { title: "Kompetensi Awal", content: "Penting untuk memastikan prasyarat sudah dimiliki siswa." }
        ]
      }
    ],
    readingMaterial: "ATP ibarat peta perjalanan satu tahun, sedangkan Modul Ajar ibarat petunjuk jalan harian. Pastikan ATP disusun dari yang mudah ke yang sulit (gradasi kognitif)."
  },
  {
    id: "per-3",
    title: "Strategi & Metode Ajar PAI",
    category: ModuleCategory.PERANGKAT,
    summary: "Pemilihan metode yang sesuai dengan jenjang kognitif dan karakteristik materi.",
    sections: [
      {
        title: "Akurasi Metode",
        content: "Menyelaraskan ceramah, diskusi, simulasi, dan inkuiri pada bab yang tepat.",
        visualization: {
          type: 'comparison',
          data: { left: "Materi Fikih (Simulasi)", right: "Materi Aqidah (Refleksi)" }
        }
      }
    ],
    readingMaterial: "Metode yang salah bisa membunuh minat belajar. Materi praktis (Fikih) lebih pas dengan demonstrasi, sementara materi sejarah (SKI) lebih pas dengan storytelling atau video biografi."
  },
  {
    id: "per-4",
    title: "Media Pembelajaran Berbasis IT",
    category: ModuleCategory.PERANGKAT,
    summary: "Optimasi alat bantu digital (Canva, Quizizz, AI) sebagai pengantar pesan ajar.",
    sections: [
      {
        title: "Visualisasi Data",
        content: "Mengubah teks panjang menjadi infografis atau video singkat yang menarik.",
        visualization: {
          type: 'concept-map',
          data: ["Visual", "Audio", "Interaktif", "AI-Generated"]
        }
      }
    ],
    readingMaterial: "Media bukan sekadar hiasan. Media harus berfungsi sebagai 'jembatan' bagi otak siswa untuk memahami konsep abstrak (seperti alam kubur atau hari kiamat) secara analogis."
  },
  {
    id: "per-5",
    title: "Desain LKPD Kreatif",
    category: ModuleCategory.PERANGKAT,
    summary: "Membuat Lembar Kerja yang menantang nalar kritis bukan sekadar menyalin buku.",
    sections: [
      {
        title: "Struktur LKPD",
        content: "Berbasis HOTS dengan instruksi yang jelas dan memicu eksplorasi mandiri.",
        subsections: [
          { title: "Fitur", content: "Gunakan QR Code atau Link untuk tambahan materi eksternal." }
        ]
      }
    ],
    readingMaterial: "LKPD yang baik adalah yang menuntun siswa menemukan konsep (Guided Inquiry), bukan sekadar lembaran soal pilihan ganda yang membosankan."
  },
  {
    id: "per-6",
    title: "P5 & PPRA PAI",
    category: ModuleCategory.PERANGKAT,
    summary: "Proyek penguatan karakter yang mengawinkan nilai Pancasila dan Moderasi Beragama.",
    sections: [
      {
        title: "Tahapan Proyek",
        content: "Siswa belajar memecahkan masalah lingkungan dengan semangat kebinekaan.",
        visualization: {
          type: 'workflow',
          data: ["Temukan Masalah", "Bayangkan Solusi", "Lakukan Aksi", "Bagikan Inspirasi"]
        }
      }
    ],
    readingMaterial: "P5 di PAI harus menekankan pada 'Rahmatan Lil 'Alamin'. Contoh projek: Pengelolaan sampah masjid (Tema Bangunlah Jiwa Raganya) dengan pendekatan ramah lingkungan."
  },
  {
    id: "per-7",
    title: "Instrumen & Rubrik Asesmen",
    category: ModuleCategory.PERANGKAT,
    summary: "Penyusunan alat ukur yang valid untuk menilai kompetensi siswa secara objektif.",
    sections: [
      {
        title: "Validitas Alat Ukur",
        content: "Menyusun kisi-kisi soal yang selaras dengan indikator tujuan pembelajaran.",
        subsections: [
          { title: "Rubrik", content: "Kriteria penilaian yang jelas agar asesmen bersifat transparan." }
        ]
      }
    ],
    readingMaterial: "Rubrik sangat penting bagi asesmen kinerja. Dengan rubrik, siswa tahu di mana letak kelebihan dan kekurangan tugas mereka secara detail."
  },
  {
    id: "per-8",
    title: "Remedial & Pengayaan",
    category: ModuleCategory.PERANGKAT,
    summary: "Layanan tindak lanjut bagi siswa yang belum tuntas atau sudah melampaui target.",
    sections: [
      {
        title: "Optimalisasi Potensi",
        content: "Perlakuan berbeda berdasarkan hasil asesmen untuk mewujudkan ketuntasan belajar.",
        visualization: {
          type: 'comparison',
          data: { left: "Remedial (Bantuan Khusus)", right: "Pengayaan (Tantangan Baru)" }
        }
      }
    ],
    readingMaterial: "Remedial tidak harus mengulang ujian, bisa dengan tutor sebaya atau penyederhanaan instruksi. Pengayaan bertujuan agar siswa pintar tidak merasa bosan di kelas."
  }
];
