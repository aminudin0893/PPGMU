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
        ],
        learningActivity: "Simulasi Transaksi: Siswa membandingkan jual beli kredit dengan bunga tetap (konvensional) dan dengan margin keuntungan yang disepakati (syariah).",
        dailyLife: "Membiasakan diri untuk teliti saat meminjam atau meminjamkan uang, menghindari syarat tambahan yang memberatkan pihak lain.",
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
        ],
        learningActivity: "Debat Klasikal: Membahas mengapa Umar bin Khattab melakukan ijtihad dalam pembagian zakat muallaf di zamannya, dikaitkan dengan konteks kekinian.",
        dailyLife: "Meneladani kegigihan Khalifah dalam menjaga persatuan dengan cara aktif mendamaikan teman yang sedang berselisih.",
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
        ],
        learningActivity: "Studi Kasus: Siswa berdiskusi tentang bagaimana merespons perbedaan dalam tata cara ibadah (furu'iyyah) di lingkungan sekolah dengan sikap tasamuh.",
        dailyLife: "Tetap berteman baik dengan siapa saja tanpa membedakan latar belakang suku atau agama, sambil tetap teguh pada keyakinan diri.",
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
        ],
        learningActivity: "Refleksi Terbuka: Guru bertanya 'Apa satu hal dari materi ini yang paling berguna jika kalian sedang dalam kesulitan?', memancing kedalaman makna (Deep Learning).",
        dailyLife: "Mencoba menerapkan satu ayat Al-Qur'an yang baru dipelajari dalam interaksi sehari-hari di sekolah.",
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
        ],
        learningActivity: "Gamifikasi Pembelajaran: Menggunakan aplikasi kuis interaktif yang memberikan skor langsung (instant feedback) untuk memotivasi siswa Gen-Z.",
        dailyLife: "Mengatur waktu penggunaan gadget (screen time) secara bijak agar tetap produktif dan menjaga kesehatan mental.",
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
        learningActivity: "Bimbingan Sebaya: Menugaskan siswa reguler untuk mendampingi rekan ABK dalam memahami instruksi praktek ibadah.",
        dailyLife: "Memberikan bantuan secara spontan kepada orang di sekitar yang membutuhkan tanpa diminta, sebagai bentuk empati inklusif.",
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
        learningActivity: "Eksperimen Prompt: Siswa mencoba meminta AI membuat puisi bertema Asmaul Husna, lalu guru memberikan feedback dari sisi kedalaman nilai spiritualnya.",
        dailyLife: "Berani mematikan semua teknologi (digital detox) selama satu jam sehari untuk fokus berdzikir dan menenangkan pikiran.",
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
        ],
        learningActivity: "Micro-Planning: Guru merancang satu modul ajar sederhana untuk satu kali pertemuan dengan fokus pada satu Tujuan Pembelajaran (TP) yang spesifik.",
        dailyLife: "Membuat daftar rencana kegiatan harian (to-do list) agar aktivitas lebih terarah dan efisien.",
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
        learningActivity: "Role-Play: Menugaskan kelompok siswa untuk mensimulasikan cara bertayammum di atas pesawat sebagai praktek fikih kontemporer.",
        dailyLife: "Memilih cara berkomunikasi yang tepat saat menasihati adik, disesuaikan dengan suasana hati dan umurnya.",
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
        learningActivity: "Karya Digital: Siswa merancang e-poster menggunakan Canva tentang nilai-nilai moderasi beragama untuk diunggah di Instagram sekolah.",
        dailyLife: "Menggunakan video pendek inspiratif sebagai cara mensyukuri nikmat Tuhan saat sedang merasa lelah.",
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
        ],
        learningActivity: "Workshop Desain: Guru mencoba membuat satu halaman LKPD yang tidak berisi pertanyaan hafalan, namun berisi panduan analisis sebuah kejadian nyata.",
        dailyLife: "Menggunakan jurnal harian untuk mencatat perkembangan kebiasaan baik (habit tracker) secara mandiri.",
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
        learningActivity: "Audit Lingkungan: Siswa berkeliling sekolah mencari masalah sosial (misal: perundungan atau sampah berlebih) and menyusun rencana aksi penanggulangannya.",
        dailyLife: "Aktif ikut serta dalam kegiatan kerja bakti atau gotong royong di lingkungan RT sebagai wujud nyata nilai Pancasila.",
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
        ],
        learningActivity: "Peer-Assessment: Siswa menggunakan rubrik sederhana buatan guru untuk menilai kejelasan presentasi kelompok temannya.",
        dailyLife: "Membuat standar 'keberhasilan' pribadi untuk setiap aktivitas besar agar bisa dievaluasi secara adil bagi diri sendiri.",
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
        learningActivity: "Klinik Belajar: Guru membuka sesi khusus 15 menit bagi siswa yang masih kesulitan memahami konsep tajwid (Remedial) sekaligus memberikan tantangan tafsir bagi yang sudah mahir (Pengayaan).",
        dailyLife: "Bersedia mengajari teman yang kesulitan (Tutor Sebaya) sebagai cara memperdalam pemahaman kita sendiri terhadap sebuah ilmu.",
        visualization: {
          type: 'comparison',
          data: { left: "Remedial (Bantuan Khusus)", right: "Pengayaan (Tantangan Baru)" }
        }
      }
    ],
    readingMaterial: "Remedial tidak harus mengulang ujian, bisa dengan tutor sebaya atau penyederhanaan instruksi. Pengayaan bertujuan agar siswa pintar tidak merasa bosan di kelas."
  },
  {
    id: "smp7-1",
    title: "Al-Qur'an dan Hadis: Al-Asma al-Husna",
    category: ModuleCategory.SMP_7,
    summary: "Memahami keagungan Allah SWT melalui Asmaul Husna: Al-Alim, Al-Khabir, As-Sami, dan Al-Bashir.",
    sections: [
      {
        title: "Mengenal Sifat Allah",
        content: "Empat nama Allah yang menunjukkan keluasan ilmu dan pengawasan-Nya.",
        subsections: [
          { title: "Al-Alim", content: "Maha Mengetahui segala sesuatu.", explanation: "Pengetahuan Allah meliputi masa lalu, sekarang, dan masa depan tanpa ada yang tersembunyi." },
          { title: "Al-Khabir", content: "Maha Teliti/Waspada.", explanation: "Allah mengetahui detail terkecil dari setiap kejadian, termasuk niat di balik tindakan." }
        ],
        learningActivity: "Game 'CCTV Ilahi': Siswa merenungkan tindakan mereka jika diawasi oleh kamera, lalu dihubungkan dengan sifat Allah Al-Bashir.",
        dailyLife: "Bertindak jujur meskipun sedang sendirian karena yakin Allah Al-Bashir selalu mengawasi.",
        visualization: { type: 'concept-map', data: ["Al-Alim", "Al-Khabir", "As-Sami", "Al-Bashir"] }
      }
    ]
  },
  {
    id: "smp7-2",
    title: "Fikih: Taharah (Bersuci)",
    category: ModuleCategory.SMP_7,
    summary: "Dasar-dasar mensucikan diri dari najis dan hadas sebagai prasyarat ibadah.",
    sections: [
      {
        title: "Najis dan Hadas",
        content: "Klasifikasi kotoran yang menghalangi sahnya salat.",
        subsections: [
          { title: "Najis Mukhaffafah", content: "Najis ringan (air kencing bayi laki-laki < 2 tahun).", explanation: "Cukup dipercikkan air pada bagian yang terkena." },
          { title: "Najis Mutawassitah", content: "Najis sedang (darah, nanah, tinja).", explanation: "Harus dibasuh sampai hilang warna, bau, dan rasanya." },
          { title: "Najis Mugallazah", content: "Najis berat (anjing dan babi).", explanation: "Harus dibasuh 7 kali, salah satunya dengan tanah." }
        ],
        learningActivity: "Praktek Langsung: Siswa mendemonstrasikan cara berwudhu dan tayamum yang benar di depan kelas.",
        dailyLife: "Menjaga kebersihan pakaian dan tempat tinggal sebagai bagian dari iman.",
        visualization: { type: 'workflow', data: ["Menghilangkan Najis", "Wudhu/Tayamum", "Mandi Wajib", "Suci & Siap Ibadah"] }
      }
    ]
  },
  {
    id: "smp8-1",
    title: "Akidah: Iman Kepada Kitab Allah",
    category: ModuleCategory.SMP_8,
    summary: "Meyakini wahyu Allah yang diturunkan kepada para Rasul sebagai pedoman umat manusia.",
    sections: [
      {
        title: "Kitab dan Rasul",
        content: "Mengenal empat kitab yang wajib diimani.",
        subsections: [
          { title: "Taurat", content: "Diturunkan kepada Nabi Musa AS." },
          { title: "Zabur", content: "Diturunkan kepada Nabi Daud AS." },
          { title: "Injil", content: "Diturunkan kepada Nabi Isa AS." },
          { title: "Al-Qur'an", content: "Diturunkan kepada Nabi Muhammad SAW sebagai penyempurna." }
        ],
        learningActivity: "Literasi Digital: Mencari ayat-ayat Al-Qur'an yang menjelaskan tentang keberadaan kitab-kitab terdahulu.",
        dailyLife: "Membiasakan membaca Al-Qur'an setiap habis Maghrib sebagai bentuk interaksi dengan wahyu Allah.",
        visualization: { type: 'workflow', data: ["Taurat", "Zabur", "Injil", "Al-Qur'an"] }
      }
    ]
  },
  {
    id: "smp8-2",
    title: "Akhlak: Menghindari Perilaku Menyimpang",
    category: ModuleCategory.SMP_8,
    summary: "Bahaya mengonsumsi khamr, judi, dan pertengkaran bagi kehidupan pribadi dan sosial.",
    sections: [
      {
        title: "Bahaya Khamr dan Judi",
        content: "Mengapa Islam melarang keras minuman keras dan perjudian.",
        explanation: "Khamr merusak akal yang merupakan anugerah terbesar manusia, sedangkan judi menghancurkan ekonomi dan mental secara instan.",
        learningActivity: "Analisis Berita: Siswa mencari berita tentang kriminalitas akibat pengaruh alkohol dan mendiskusikan solusinya.",
        dailyLife: "Berani berkata 'Tidak' pada ajakan teman untuk mencoba hal-hal negatif.",
      }
    ]
  },
  {
    id: "smp9-1",
    title: "Akidah: Iman Kepada Hari Akhir",
    category: ModuleCategory.SMP_9,
    summary: "Memahami akhir kehidupan dunia dan awal kehidupan hakiki di akhirat.",
    sections: [
      {
        title: "Fase Kehidupan Akhirat",
        content: "Tahapan yang dilalui manusia setelah kematian.",
        subsections: [
          { title: "Yaumul Barzakh", content: "Alam kubur, pintu gerbang akhirat." },
          { title: "Yaumul Ba'ats", content: "Hari kebangkitan seluruh manusia." },
          { title: "Yaumul Mizan", content: "Hari penimbangan amal perbuatan." }
        ],
        learningActivity: "Muhasabah: Sesi refleksi tentang apa saja bekal yang sudah siap dibawa jika 'hari esok' adalah kiamat.",
        dailyLife: "Selalu berbuat baik karena sadar setiap tindakan akan dimintai pertanggungjawaban di Mizan.",
        visualization: { type: 'workflow', data: ["Kematian", "Alam Barzakh", "Kebangkitan", "Hisab & Mizan", "Surga/Neraka"] }
      }
    ]
  },
  {
    id: "smp9-2",
    title: "Sejarah: Islam di Nusantara",
    category: ModuleCategory.SMP_9,
    summary: "Masuknya Islam ke Indonesia melalui dakwah yang damai dan adaptasi budaya.",
    sections: [
      {
        title: "Wali Songo",
        content: "Sembilan tokoh penyebar Islam di tanah Jawa.",
        explanation: "Dakwah Wali Songo sangat efektif karena menggunakan pendekatan seni, budaya, dan kearifan lokal tanpa kekerasan.",
        subsections: [
          { title: "Sunan Kalijaga", content: "Berdakwah melalui media Wayang Kulit dan Gamelan." },
          { title: "Sunan Kudus", content: "Menghormati sapi sebagai toleransi terhadap umat Hindu di sekitarnya." }
        ],
        learningActivity: "Kunjungan Virtual: Menonton dokumenter makam-makam wali dan situs bersejarah Islam di Indonesia.",
        dailyLife: "Menghargai keragaman budaya di sekitar kita sebagai kekayaan bangsa.",
        visualization: { type: 'concept-map', data: ["Perdagangan", "Perkawinan", "Pendidikan", "Kesenian"] }
      }
    ]
  },
  {
    id: "smp7-3",
    title: "Akhlak: Adab Makan dan Minum",
    category: ModuleCategory.SMP_7,
    summary: "Menerapkan sunnah Nabi Muhammad SAW dalam aktivitas harian sebagai bentuk syukur.",
    sections: [
      {
        title: "Sunnah Makan",
        content: "Tata cara makan yang sehat dan berpahala menurut Islam.",
        subsections: [
          { title: "Membaca Basmalah", content: "Memulai dengan nama Allah agar berkah." },
          { title: "Menggunakan Tangan Kanan", content: "Mengikuti teladan Rasulullah dan menjaga kesopanan." }
        ],
        learningActivity: "Praktik Bersama: Siswa makan siang bersama di kelas sambil mempraktikkan doa dan adab yang telah dipelajari.",
        dailyLife: "Selalu duduk saat minum dan tidak mencela makanan yang kurang sesuai selera.",
      }
    ]
  },
  {
    id: "smp8-3",
    title: "Fikih: Salat Sunnah Berjamaah dan Munfarid",
    category: ModuleCategory.SMP_8,
    summary: "Mengenal jenis-jenis salat sunnah yang sangat dianjurkan untuk menambah pahala.",
    sections: [
      {
        title: "Salat Sunnah Berjamaah",
        content: "Salat sunnah yang utama dikerjakan bersama-sama.",
        subsections: [
          { title: "Salat Idul Fitri/Adha", content: "Salat hari raya dua rakaat." },
          { title: "Salat Khusuf/Kusuf", content: "Salat saat terjadi gerhana matahari atau bulan." }
        ],
        learningActivity: "Simulasi Salat Gerhana: Siswa mempraktekkan tata cara salat gerhana yang memiliki dua kali ruku dalam satu rakaat.",
        dailyLife: "Menyempatkan salat Duha sebelum memulai aktivitas belajar di sekolah.",
        visualization: { type: 'concept-map', data: ["Idain", "Gerhana", "Istiska", "Tarawih"] }
      }
    ]
  },
  {
    id: "smp9-3",
    title: "Fikih: Ibadah Haji dan Umrah",
    category: ModuleCategory.SMP_9,
    summary: "Memahami rukun, syarat, dan hikmah perjalanan suci ke Tanah Suci (Baitullah).",
    sections: [
      {
        title: "Rukun Haji",
        content: "Rangkaian ibadah yang tidak boleh ditinggalkan agar haji sah.",
        subsections: [
          { title: "Wukuf", content: "Berdiam diri di Padang Arafah pada 9 Zulhijjah." },
          { title: "Tawaf", content: "Mengelilingi Ka'bah sebanyak 7 kali." },
          { title: "Sa'i", content: "Berlari kecil antara Bukit Safa dan Marwah." }
        ],
        learningActivity: "Manasik Haji SMP: Simulasi berkeliling 'Ka'bah buatan' di lapangan sekolah dengan mengenakan pakaian ihram.",
        dailyLife: "Melatih kesabaran dalam antrean dan keramaian sebagai miniatur ujian kesabaran saat berhaji.",
        visualization: { type: 'workflow', data: ["Ihram", "Wukuf", "Tawaf", "Sa'i", "Tahallul"] }
      }
    ]
  },
  // Additional SMP 7
  {
    id: "smp7-4",
    title: "Akidah: Malaikat Allah yang Setia",
    category: ModuleCategory.SMP_7,
    summary: "Mengimani keberadaan malaikat dan tugas-tugas spesifik mereka yang mempengaruhi kehidupan manusia.",
    sections: [
      {
        title: "Tugas 10 Malaikat",
        content: "Mengenal malaikat utama yang berinteraksi dengan alam semesta dan manusia.",
        explanation: "Kesadaran akan malaikat pencatat amal (Raqib-Atid) membangun integritas diri yang kuat bahkan tanpa pengawasan manusia.",
        learningActivity: "Flashcard Challenge: Menebak nama malaikat berdasarkan deskripsi tugas yang diberikan guru secara cepat.",
        dailyLife: "Menghindari perkataan buruk karena malu kepada malaikat yang selalu mencatat setiap kata.",
        visualization: { type: 'concept-map', data: ["Jibril", "Mikail", "Israfil", "Izrail", "Munkar/Nakir", "Raqib/Atid", "Ridwan/Malik"] }
      }
    ]
  },
  // Additional SMP 8
  {
    id: "smp8-4",
    title: "Al-Qur'an: Rendah Hati, Hemat, dan Sederhana",
    category: ModuleCategory.SMP_8,
    summary: "Memandai nilai-nilai luhur dari QS. al-Furqan/25: 63 dan QS. al-Isra’/17: 27.",
    sections: [
      {
        title: "Gaya Hidup Muslim",
        content: "Larangan bersikap sombong dan boros (tabzir).",
        explanation: "Boros adalah tanda ketidakmampuan mengendalikan nafsu dan hilangnya empati terhadap sesama.",
        learningActivity: "Audit Uang Saku: Siswa mencatat pengeluaran selama seminggu dan menganalisis mana yang kebutuhan vs keinginan.",
        dailyLife: "Menghabiskan makanan yang diambil agar tidak menjadi sampah makanan (mubazir).",
      }
    ]
  },
  // Additional SMP 9
  {
    id: "smp9-4",
    title: "Akhlak: Etika Bergaul dan Adab Bertamu",
    category: ModuleCategory.SMP_9,
    summary: "Memperkuat jalinan ukhuwah melalui tata krama sosial yang sesuai syariat Islam.",
    sections: [
      {
        title: "Adab Sosial",
        content: "Pentingnya izin (isti'zan) dan menjaga pandangan dalam interaksi.",
        learningActivity: "Role-Play: Mempraktikkan cara bertamu yang sopan, mulai dari mengetuk pintu (maksimal 3x) hingga cara duduk yang benar.",
        dailyLife: "Selalu meminta izin sebelum meminjam barang milik teman atau saudara.",
        visualization: { type: 'workflow', data: ["Izin/Ketuk Pintu", "Ucapkan Salam", "Duduk yang Sopan", "Jaga Durasi", "Pamit dengan Baik"] }
      }
    ]
  },
  // Parenting Section
  {
    id: "parenting-1",
    title: "Fase Toddler (1-3 Tahun): Menanamkan Benih Fitrah",
    category: ModuleCategory.PARENTING,
    summary: "Mengenalkan konsep ketuhanan melalui pembiasaan visual dan emosi yang positif.",
    sections: [
      {
        title: "Kecintaan pada Allah",
        content: "Tahap awal bukan tentang hukum, tapi tentang 'Allah Maha Penyayang'.",
        explanation: "Anak usia ini menyerap energi emosi orang tua. Hubungkan hal menyenangkan dengan nama Allah.",
        learningActivity: "Buku Cerita Bergambar: Membacakan buku tentang ciptaan Allah (hewan, bunga) dengan ekspresi kagum.",
        dailyLife: "Mengucapkan 'Alhamdulillah' dengan ceria setiap kali anak mendapatkan sesuatu yang enak atau bagus.",
      },
      {
        title: "Penanganan Permasalahan: Tantrum",
        content: "Menghadapi emosi anak yang meluap karena keterbatasan komunikasi.",
        explanation: "Tantrum adalah bagian dari perkembangan otak. Orang tua harus menjadi 'jangkar' yang tenang.",
        learningActivity: "Teknik 'Validasi Emosi': Duduk sejajar mata anak, katakan 'Adek sedih ya mainannya rusak?'. Jangan membalas dengan amarah.",
        dailyLife: "Mendoakan batin anak saat ia sedang tidur agar diberikan ketenangan hati.",
      }
    ]
  },
  {
    id: "parenting-2",
    title: "Fase Kanak-kanak (4-10 Tahun): Disiplin Berbasis Dialog",
    category: ModuleCategory.PARENTING,
    summary: "Mulai memperkenalkan aturan ibadah secara bertahap dan menanamkan logika moral.",
    sections: [
      {
        title: "Adab Sebelum Ilmu",
        content: "Melatih kemandirian ibadah (shalat) secara sukarela.",
        explanation: "Rasulullah mengajarkan perintah shalat di usia 7 tahun dengan lemah lembut.",
        learningActivity: "Pohon Shalat: Menempelkan stiker bintang di pohon kertas setiap kali anak shalat tanpa diingatkan.",
        dailyLife: "Melibatkan anak dalam musyawarah keluarga sederhana (misal: mau liburan ke mana?).",
      },
      {
        title: "Masalah: Berbohong",
        content: "Anak mulai berimajinasi atau takut dihukum sehingga tidak jujur.",
        explanation: "Pahami motivasinya: apakah takut? Apakah ingin perhatian? Fokus pada kejujuran, bukan hukumannya.",
        learningActivity: "Role-Play Kejujuran: Bermain peran tentang situasi sulit dan bagaimana cara mengakui kesalahan dengan berani.",
        dailyLife: "Memberikan apresiasi tinggi (high five/pelukan) saat anak berani jujur meskipun dia berbuat salah.",
      }
    ]
  },
  {
    id: "parenting-3",
    title: "Fase Remaja (11-18 Tahun): Menjadi Sahabat Diskusi",
    category: ModuleCategory.PARENTING,
    summary: "Berkomunikasi dengan remaja yang sedang mencari identitas diri dan membutuhkan privasi.",
    sections: [
      {
        title: "Membangun Kepercayaan",
        content: "Beralih dari instruksi (perintah) menjadi diskusi (mendengar).",
        explanation: "Ali bin Abi Thalib menyarankan 'jadikan mereka sahabat' di fase ini.",
        learningActivity: "Deep Talk: Mengagendakan waktu khusus (kopi sore/jalan pagi) hanya untuk mendengar keluh kesah mereka tanpa menghakimi.",
        dailyLife: "Menghargai privasi kamar atau gadget anak selama nilai-nilai dasar tetap terjaga.",
      },
      {
        title: "Masalah: Pengaruh Teman (Peer Pressure)",
        content: "Remaja lebih mendengarkan teman daripada orang tua.",
        explanation: "Bantu mereka membangun filter internal, bukan melarang mereka berteman.",
        learningActivity: "Diskusi Nilai: Menonton film bersama dan mendiskusikan keputusan karakter jika mereka dalam posisi yang sama.",
        dailyLife: "Mengenal teman-temannya dengan cara mengundang mereka main ke rumah (menjadi tuan rumah yang asik).",
      }
    ]
  },
  {
    id: "parenting-4",
    title: "Kecerdasan Spiritual Anak",
    category: ModuleCategory.PARENTING,
    summary: "Membentuk hubungan batin anak dengan Sang Pencipta melampaui sekadar rutinitas ritual.",
    sections: [{
      title: "Love-Based Devotion",
      content: "Mengenalkan Allah melalui keindahan alam dan kasih sayang.",
      learningActivity: "Journaling Syukur: Mengajak anak menulis 3 hal yang ia syukuri pada Allah setiap malam.",
      dailyLife: "Menghubungkan keberhasilan anak dengan bantuan Allah (doa).",
    }]
  },
  {
    id: "parenting-5",
    title: "Mengatasi Kecanduan Gadget",
    category: ModuleCategory.PARENTING,
    summary: "Langkah-langkah detoks digital dan membangun kebiasaan menggunakan teknologi secara sehat.",
    sections: [{
      title: "Digital Minimalism",
      content: "Menetapkan zona bebas gadget di rumah (Meja makan & Kamar tidur).",
      learningActivity: "Screen-Free Weekend: Membuat daftar kegiatan luar ruangan yang seru untuk dilakukan bersama.",
      dailyLife: "Orang tua menjadi teladan dengan tidak bermain HP saat sedang berbicara dengan anak.",
    }]
  },
  {
    id: "parenting-6",
    title: "Pendidikan Seks Dasar dalam Islam",
    category: ModuleCategory.PARENTING,
    summary: "Mengenalkan konsep aurat, privasi, dan batasan sentuhan sejak dini sesuai syariat.",
    sections: [{
      title: "Sentuhan Boleh & Tidak",
      content: "Mengajarkan anak bagian tubuh mana yang hanya boleh disentuh diri sendiri dan orang tua/dokter.",
      learningActivity: "Anatomi Kertas: Menandai area 'privasi' pada gambar tubuh manusia bersama anak.",
      dailyLife: "Membiasakan mengetuk pintu sebelum masuk ke kamar orang lain.",
    }]
  },
  {
    id: "parenting-7",
    title: "Budaya Literasi Al-Qur'an",
    category: ModuleCategory.PARENTING,
    summary: "Menjadikan rumah sebagai taman surga dengan lantunan ayat-ayat suci.",
    sections: [{
      title: "Home Quranic Environment",
      content: "Menciptakan waktu khusus mengaji bersama keluarga (Maghrib-Isya).",
      learningActivity: "Tebak Ayat: Permainan menebak sambungan ayat atau kisah di balik sebuah surat.",
      dailyLife: "Menyetel murattal di rumah untuk menciptakan suasana tenang.",
    }]
  },
  {
    id: "parenting-8",
    title: "Manajemen Keuangan Keluarga Syariah",
    category: ModuleCategory.PARENTING,
    summary: "Mengajarkan anak tentang konsep halal-haram, hemat, dan berbagi (sedekah).",
    sections: [{
      title: "Jar System (Tabungan Keranjang)",
      content: "Membagi uang saku anak ke dalam tabungan: Jajan, Menabung, dan Sedekah.",
      learningActivity: "Kalkulasi Belanja: Melibatkan anak menghitung total belanja bulanan dan memprioritaskan kebutuhan.",
      dailyLife: "Mengajak anak memberikan sedekah langsung kepada kaum dhuafa.",
    }]
  },
  {
    id: "parenting-9",
    title: "Manajemen Sibling Rivalry",
    category: ModuleCategory.PARENTING,
    summary: "Menangani konflik antar kakak-adik agar terjalin ukhuwah yang kuat.",
    sections: [{
      title: "Adil Tidak Harus Sama",
      content: "Memahami bahwa setiap anak memiliki kebutuhan yang berbeda.",
      learningActivity: "Sidang Keluarga: Membuat aturan bersama tentang bergantian menggunakan barang.",
      dailyLife: "Jangan membandingkan kepandaian anak yang satu dengan yang lain di depan mereka.",
    }]
  },
  {
    id: "parenting-10",
    title: "Persiapan Menjelang Baligh",
    category: ModuleCategory.PARENTING,
    summary: "Mendampingi masa pubertas anak dari sisi fisik, emosi, dan tanggung jawab hukum agama.",
    sections: [{
      title: "Welcome to Taklif",
      content: "Menjelaskan perubahan fisik dan kewajiban ibadah yang sudah menjadi tanggungan sendiri.",
      learningActivity: "Q&A Box: Menyediakan kotak pertanyaan anonim bagi anak untuk bertanya hal-hal 'tabu' atau sensitif.",
      dailyLife: "Mengajarkan tata cara mandi wajib dengan sabar dan detail.",
    }]
  },
  // --- SMP Kelas VII (Lanjutan ke-10) ---
  {
    id: "smp7-5",
    title: "Sejarah: Perjuangan Nabi Muhammad SAW di Makkah",
    category: ModuleCategory.SMP_7,
    summary: "Ketabahan dan strategi dakwah Rasulullah di tengah penentangan kaum Quraisy.",
    sections: [{
      title: "Dakwah Sirriyah & Jahriyah",
      content: "Tahapan dakwah sembunyi-sembunyi hingga terang-terangan.",
      learningActivity: "Peta Konsep: Membuat alur waktu (timeline) perjalanan dakwah Nabi di Makkah.",
      dailyLife: "Meneladani kesabaran Nabi saat menghadapi ejekan atau perlakuan tidak menyenangkan dari orang lain.",
    }]
  },
  {
    id: "smp7-6",
    title: "Al-Qur'an: Menghargai Sesama Manusia",
    category: ModuleCategory.SMP_7,
    summary: "Memahami pesan toleransi dalam QS. al-Hujurat/49: 13.",
    sections: [{
      title: "Keberagaman adalah Anugerah",
      content: "Allah menciptakan manusia berbangsa-bangsa agar saling mengenal (Lita'arafu).",
      learningActivity: "Proyek Poster: Membuat poster tentang indahnya keberagaman di sekolah.",
      dailyLife: "Berteman tanpa membeda-bedakan suku, ras, atau status sosial.",
    }]
  },
  {
    id: "smp7-7",
    title: "Fikih: Shalat Berjamaah",
    category: ModuleCategory.SMP_7,
    summary: "Keutamaan dan tata cara shalat berjamaah untuk mempererat ukhuwah.",
    sections: [{
      title: "Makmum Masbuq",
      content: "Cara mengikuti imam bagi yang terlambat datang.",
      learningActivity: "Praktik: Simulasi menjadi makmum masbuq dalam berbagai kondisi rakaat.",
      dailyLife: "Membiasakan diri datang tepat waktu saat janji bertemu teman.",
    }]
  },
  {
    id: "smp7-8",
    title: "Akhlak: Adab Terhadap Orang Tua",
    category: ModuleCategory.SMP_7,
    summary: "Kewajiban berbakti (Birrul Walidain) sebagai kunci keberkahan hidup.",
    sections: [{
      title: "Ridha Allah pada Ridha Orang Tua",
      content: "Larangan berkata 'Ah' dan perintah berbuat baik kepada ayah ibu.",
      learningActivity: "Refleksi: Menulis surat cinta atau kartu ucapan terima kasih untuk orang tua.",
      dailyLife: "Mencium tangan dan meminta doa restu sebelum berangkat sekolah.",
    }]
  },
  {
    id: "smp7-9",
    title: "Fikih: Zikir dan Doa Setelah Shalat",
    category: ModuleCategory.SMP_7,
    summary: "Menghidupkan hati dengan mengingat Allah setelah beribadah wajib.",
    sections: [{
      title: "Tumakninah dan Khusyuk",
      content: "Rangkaian bacaan zikir yang diajarkan Rasulullah.",
      learningActivity: "Hafalan: Menghafalkan 5 doa harian yang paling sering dibutuhkan.",
      dailyLife: "Tidak terburu-buru beranjak setelah shalat, meluangkan waktu 2 menit untuk berzikir.",
    }]
  },
  {
    id: "smp7-10",
    title: "Sejarah: Hijrah ke Habasyah",
    category: ModuleCategory.SMP_7,
    summary: "Penyelamatan akidah dan diplomasi awal umat Islam ke negeri Kristen.",
    sections: [{
      title: "Keadilan Raja Najasyi",
      content: "Mengapa Nabi memilih Habasyah sebagai tempat pengungsian.",
      learningActivity: "Diskusi: Membahas pentingnya perlindungan terhadap hak asasi manusia dalam Islam.",
      dailyLife: "Berani membela teman yang dizalimi atau diperlakukan tidak adil.",
    }]
  },
  {
    id: "smp7-11",
    title: "Sejarah: Fathu Makkah (Kemenangan Damai)",
    category: ModuleCategory.SMP_7,
    summary: "Strategi pembebasan kota Makkah tanpa pertumpahan darah dan pemaafan massal.",
    sections: [{
      title: "Indahnya Pemaafan",
      content: "Rasulullah memaafkan penduduk Makkah yang dulu menyakitinya.",
      learningActivity: "Role-Play: Mensimulasikan sikap memaafkan kesalahan teman yang sudah meminta maaf.",
      dailyLife: "Tidak menyimpan dendam kepada orang yang pernah berbuat salah.",
    }]
  },
  {
    id: "smp7-12",
    title: "Al-Qur'an: Amanah dan Kejujuran",
    category: ModuleCategory.SMP_7,
    summary: "Menerapkan nilai kejujuran dalam setiap perkataan dan perbuatan.",
    sections: [{
      title: "Sifat Orang Beriman",
      content: "Amanah adalah titipan yang harus dijaga dan dikembalikan kepada pemiliknya.",
      learningActivity: "Eksperimen Kantin Kejujuran: Berlatih membeli dan membayar sendiri tanpa pengawasan.",
      dailyLife: "Mengembalikan uang kembalian yang berlebih saat belanja di warung.",
    }]
  },
  {
    id: "smp7-13",
    title: "Fikih: Shalat Jamak dan Qashar",
    category: ModuleCategory.SMP_7,
    summary: "Kemudahan (Rukhshah) dalam beribadah saat sedang dalam perjalanan jauh.",
    sections: [{
      title: "Syarat Musafir",
      content: "Tata cara meringkas (Qashar) dan menggabungkan (Jamak) waktu shalat.",
      learningActivity: "Simulasi: Merancang jadwal shalat saat melakukan perjalanan studi tour sekolah.",
      dailyLife: "Tetap menjaga shalat fardu meskipun sedang sibuk dalam perjalanan.",
    }]
  },

  // --- SMP Kelas VIII (Lanjutan ke-10) ---
  {
    id: "smp8-5",
    title: "Sejarah: Pertumbuhan Ilmu Pengetahuan Bani Umayyah",
    category: ModuleCategory.SMP_8,
    summary: "Masa keemasan peradaban Islam di Damaskus dan Andalusia.",
    sections: [{
      title: "Baitul Hikmah",
      content: "Pusat penerjemahan dan pengembangan sains dunia.",
      learningActivity: "Infografis: Membuat daftar penemuan ilmuwan Muslim di era Umayyah.",
      dailyLife: "Semangat belajar tinggi untuk memajukan bangsa dan agama.",
    }]
  },
  {
    id: "smp8-6",
    title: "Fikih: Puasa Wajib dan Sunnah",
    category: ModuleCategory.SMP_8,
    summary: "Melatih pengendalian diri melalui ibadah puasa.",
    sections: [{
      title: "Hikmah Puasa",
      content: "Detoksifikasi jiwa dan penumbuhan empati kepada kaum miskin.",
      learningActivity: "Jurnal Ramadhan: Merancang target ibadah selama bulan puasa.",
      dailyLife: "Belajar menahan emosi marah saat sedang berpuasa atau saat berinteraksi.",
    }]
  },
  {
    id: "smp8-7",
    title: "Akhlak: Etika Bermedia Sosial",
    category: ModuleCategory.SMP_8,
    summary: "Menerapkan nilai Islam dalam dunia digital agar tidak terjerumus hoaks dan ghibah.",
    sections: [{
      title: "Tabayyun (Klarifikasi)",
      content: "Pentingnya mengecek kebenaran informasi sebelum menyebarkannya.",
      learningActivity: "Cek Fakta: Berlatih membedakan berita asli dan hoaks dari screenshot media sosial.",
      dailyLife: "Tidak mengomentari hal yang tidak dipahami dan tidak menyebarkan aib orang lain di internet.",
    }]
  },
  {
    id: "smp8-8",
    title: "Akidah: Iman Kepada Rasul Allah",
    category: ModuleCategory.SMP_8,
    summary: "Mengenal sifat-sifat mulia para utusan Allah sebagai teladan hidup.",
    sections: [{
      title: "Sifat Wajib Rasul",
      content: "Siddiq, Amanah, Tabligh, dan Fathanah.",
      learningActivity: "Analisis Karakter: Menghubungkan sifat Fathanah dengan kecerdasan yang dibutuhkan siswa saat ini.",
      dailyLife: "Menjaga amanah saat diberi tugas oleh guru atau orang tua.",
    }]
  },
  {
    id: "smp8-9",
    title: "Fikih: Makanan dan Minuman Halal-Haram",
    category: ModuleCategory.SMP_8,
    summary: "Menjaga kesucian tubuh dengan mengonsumsi yang thayyib.",
    sections: [{
      title: "Kriteria Halal",
      content: "Halal dari zatnya, cara memperolehnya, dan cara memprosesnya.",
      learningActivity: "Label Check: Mengamati logo halal dan komposisi pada kemasan jajanan.",
      dailyLife: "Membiasakan jajan di tempat yang terjamin kehalalan dan kebersihannya.",
    }]
  },
  {
    id: "smp8-10",
    title: "Sejarah: Peradaban Islam di Baghdad (Bani Abbasiyah)",
    category: ModuleCategory.SMP_8,
    summary: "Puncak kejayaan intelektual Islam yang memicu Renaisans Eropa.",
    sections: [{
      title: "Ilmuwan Abbasiyah",
      content: "Al-Khawarizmi (Matematika), Ibnu Sina (Kedokteran).",
      learningActivity: "Presentasi: Mengenalkan profil singkat satu ilmuwan Muslim dan jasanya bagi dunia.",
      dailyLife: "Bangga menjadi muslim yang berilmu and berpikiran maju.",
    }]
  },
  {
    id: "smp8-11",
    title: "Al-Qur'an: Etika Berkarya",
    category: ModuleCategory.SMP_8,
    summary: "Semangat kerja keras dan produktivitas sebagai bentuk ibadah.",
    sections: [{
      title: "Tangan di Atas",
      content: "Islam mendorong umatnya untuk menjadi pemberi (produktif) bukan peminta.",
      learningActivity: "Project: Merancang rencana usaha kecil-kecilan (entrepreneurship) di sekolah.",
      dailyLife: "Mengerjakan tugas sekolah dengan sungguh-sungguh tanpa menunda.",
    }]
  },
  {
    id: "smp8-12",
    title: "Akidah: Iman Kepada Kitab-Kitab Allah",
    category: ModuleCategory.SMP_8,
    summary: "Meyakini wahyu Allah sebagai pedoman hidup manusia sepanjang zaman.",
    sections: [{
      title: "Al-Qur'an sebagai Penyempurna",
      content: "Kewajiban membaca, memahami, dan mengamalkan isi Al-Qur'an.",
      learningActivity: "Kajian: Mencari ayat-ayat yang berkaitan dengan sains dalam Al-Qur'an.",
      dailyLife: "Rutin membaca Al-Qur'an setiap selesai shalat maghrib.",
    }]
  },
  {
    id: "smp8-13",
    title: "Fikih: Ibadah Haji dan Umrah",
    category: ModuleCategory.SMP_8,
    summary: "Memahami rukun, syarat, and filosofi perjalanan suci ke Baitullah.",
    sections: [{
      title: "Filosofi Tawaf",
      content: "Simbol ketaatan total manusia yang berpusat pada Allah SWT.",
      learningActivity: "Manasik: Melakukan praktik manasik haji mini di lapangan sekolah.",
      dailyLife: "Memupuk kerinduan untuk bisa mengunjungi Ka'bah suatu hari nanti.",
    }]
  },

  // --- SMP Kelas IX (Lanjutan ke-10) ---
  {
    id: "smp9-5",
    title: "Al-Qur'an: Keluhuran Etika Berilmu",
    category: ModuleCategory.SMP_9,
    summary: "Kewajiban menuntut ilmu dan derajat orang berilmu dalam QS. al-Mujadilah/58: 11.",
    sections: [{
      title: "Derajat Ahli Ilmu",
      content: "Allah mengangkat derajat orang yang beriman dan berilmu beberapa derajat.",
      learningActivity: "Debat: 'Mana yang lebih utama, ilmu atau harta?' berdasarkan perspektif Islam.",
      dailyLife: "Menghargai guru dan buku sebagai sumber ilmu yang berharga.",
    }]
  },
  {
    id: "smp9-6",
    title: "Akidah: Iman Kepada Qada dan Qadar",
    category: ModuleCategory.SMP_9,
    summary: "Memahami rahasia takdir dan pentingnya ikhtiar serta tawakal.",
    sections: [{
      title: "Ikhtiar dan Doa",
      content: "Perbedaan takdir Mubram dan takdir Muallaq.",
      learningActivity: "Case Study: Bagaimana menyikapi kegagalan dalam ujian setelah belajar keras.",
      dailyLife: "Tidak mudah putus asa dan selalu bersyukur atas apapun hasil yang diterima.",
    }]
  },
  {
    id: "smp9-7",
    title: "Fikih: Penyembelihan Hewan, Aqiqah, dan Kurban",
    category: ModuleCategory.SMP_9,
    summary: "Adab terhadap binatang dan semangat berbagi dalam ibadah kurban.",
    sections: [{
      title: "Syarat Sah Kurban",
      content: "Jenis hewan, waktu penyembelihan, dan pembagian daging.",
      learningActivity: "Simulasi: Menghitung pembagian daging kurban untuk fakir miskin di lingkungan sekitar.",
      dailyLife: "Menyayangi binatang dan tidak menyiksanya.",
    }]
  },
  {
    id: "smp9-8",
    title: "Akhlak: Berbakti kepada Guru",
    category: ModuleCategory.SMP_9,
    summary: "Guru sebagai pewaris nabi dan orang tua di sekolah yang harus dihormati.",
    sections: [{
      title: "Adab Berguru",
      content: "Mendengarkan penjelasan, bertanya dengan sopan, dan mendoakan guru.",
      learningActivity: "Video Tribute: Membuat video singkat ucapan terima kasih untuk guru favorit.",
      dailyLife: "Menyapa guru dengan ramah saat bertemu di dalam maupun di luar sekolah.",
    }]
  },
  {
    id: "smp9-9",
    title: "Fikih: Zakat Fitrah dan Zakat Mal",
    category: ModuleCategory.SMP_9,
    summary: "Pembersihan jiwa dan harta melalui instrumen ekonomi Islam.",
    sections: [{
      title: "Mustahik Zakat",
      content: "8 golongan yang berhak menerima zakat (Asnaf).",
      learningActivity: "Perhitungan Zakat: Siswa berlatih menghitung nishab dan kadar zakat emas atau tabungan.",
      dailyLife: "Suka bersedekah meskipun dalam jumlah kecil sebagai latihan kedermawanan.",
    }]
  },
  {
    id: "smp9-10",
    title: "Sejarah: Perkembangan Islam di Benua Lain",
    category: ModuleCategory.SMP_9,
    summary: "Jejak dakwah Islam di Asia, Eropa, Amerika, dan Australia.",
    sections: [{
      title: "Islam di Andalusia (Spanyol)",
      content: "Kontribusi besar Islam terhadap kemajuan ilmu pengetahuan di Eropa.",
      learningActivity: "Laporan Visual: Mengumpulkan foto-foto peninggalan arsitektur Islam di dunia.",
      dailyLife: "Memiliki wawasan global dan bangga akan sejarah besar umat Islam di dunia.",
    }]
  },
  {
    id: "smp9-11",
    title: "Sejarah: Wali Songo di Indonesia",
    category: ModuleCategory.SMP_9,
    summary: "Strategi dakwah kultural yang mengislamkan Nusantara dengan damai.",
    sections: [{
      title: "Dakwah Sunan Kalijaga",
      content: "Penggunaan media wayang dan tembang sebagai sarana dakwah.",
      learningActivity: "Analisis Budaya: Mencari tradisi lokal yang disisipi nilai-nilai Islam oleh para wali.",
      dailyLife: "Menghargai budaya lokal tanpa meninggalkan prinsip-prinsip syariat.",
    }]
  },
  {
    id: "smp9-12",
    title: "Akhlak: Etika Berbisnis",
    category: ModuleCategory.SMP_9,
    summary: "Prinsip kejujuran dan keadilan dalam transaksi muamalah.",
    sections: [{
      title: "Larangan Riba dan Curang",
      content: "Kewajiban menyempurnakan takaran dan timbangan.",
      learningActivity: "Market Day: Berlatih jual beli dengan jujur dan transparan di sekolah.",
      dailyLife: "Berterus terang jika barang yang dijual/ditukar memiliki cacat.",
    }]
  },
  {
    id: "smp9-13",
    title: "Fikih: Waris Dasar (Mawaris)",
    category: ModuleCategory.SMP_9,
    summary: "Pengaturan harta peninggalan secara adil berdasarkan syariat Islam.",
    sections: [{
      title: "Keadilan dalam Waris",
      content: "Memahami konsep ahli waris dan pembagian porsinya.",
      learningActivity: "Studi Kasus: Menghitung pembagian warisan dalam skenario keluarga sederhana.",
      dailyLife: "Menghindari perselisihan dengan saudara hanya karena masalah harta.",
    }]
  },

  // --- Psikologi Anak (Menu Baru) ---
  {
    id: "psikologi-1",
    title: "Perkembangan Kognitif Piaget",
    category: ModuleCategory.PSIKOLOGI,
    summary: "Memahami tahapan berpikir anak mulai dari sensorimotor hingga operasional formal.",
    sections: [{
      title: "Tahap Pra-Operasional (2-7 th)",
      content: "Anak mulai menggunakan simbol dan bahasa, namun masih egosentris.",
      explanation: "Jangan memarahi anak jika mereka belum bisa berbagi dengan sempurna, karena secara perkembangan mereka masih melihat dunia dari sudut pandang diri sendiri.",
      learningActivity: "Eksperimen Konservasi: Guru menunjukkan dua gelas air yang sama, lalu menuang satu ke wadah lebar untuk melihat respon anak.",
      dailyLife: "Gunakan bahasa konkret dan visual saat memberikan instruksi pada anak balita.",
    }]
  },
  {
    id: "psikologi-2",
    title: "Teori Psikososial Erikson",
    category: ModuleCategory.PSIKOLOGI,
    summary: "Delapan tahapan krisis emosional yang membentuk kepribadian manusia.",
    sections: [{
      title: "Trust vs Mistrust (0-1.5 th)",
      content: "Membangun rasa aman melalui responsivitas pengasuh.",
      learningActivity: "Analisis Video: Mengamati interaksi ibu-bayi dan dampaknya pada keterikatan (attachment).",
      dailyLife: "Segera merespon tangisan bayi agar ia merasa dunia adalah tempat yang aman.",
    }]
  },
  {
    id: "psikologi-3",
    title: "Kesehatan Mental Remaja",
    category: ModuleCategory.PSIKOLOGI,
    summary: "Mengenali tanda-tanda stres, kecemasan, dan depresi pada usia sekolah menengah.",
    sections: [{
      title: "Self-Harm dan Ide Bunuh Diri",
      content: "Faktor risiko dan cara memberikan pertolongan pertama psikologis.",
      explanation: "Penting bagi guru untuk tidak meremehkan curhatan siswa dan menjadi pendengar yang empatik (non-judgmental).",
      learningActivity: "Simulasi Konseling: Guru berlatih menggunakan teknik 'Active Listening' saat siswa bercerita masalah pribadi.",
      dailyLife: "Terbuka untuk mencari bantuan profesional (psikolog/psikiater) jika merasa emosi tidak terkendali.",
    }]
  },
  {
    id: "psikologi-4",
    title: "Gaya Belajar Anak (VAK)",
    category: ModuleCategory.PSIKOLOGI,
    summary: "Menyesuaikan metode mengajar dengan kecenderungan otak anak: Visual, Auditori, atau Kinestetik.",
    sections: [{
      title: "Visual Learner",
      content: "Anak yang lebih cepat paham dengan gambar, grafik, dan warna.",
      learningActivity: "Tes Gaya Belajar: Siswa mengisi kuesioner singkat untuk mengetahui kecenderungan belajar mereka.",
      dailyLife: "Gunakan pulpen warna-warni (highlighter) saat mencatat pelajaran agar lebih mudah diingat.",
    }]
  },
  {
    id: "psikologi-5",
    title: "Psikologi Komunikasi Orang Tua-Anak",
    category: ModuleCategory.PSIKOLOGI,
    summary: "Teknik 'I-Message' dan 'Active Listening' untuk mencegah konflik dalam keluarga.",
    sections: [{
      title: "Teknik I-Message",
      content: "Menyampaikan perasaan tanpa menyalahkan anak (Misal: 'Mama sedih...' bukan 'Kamu nakal...').",
      learningActivity: "Workshop Kata: Mengubah kalimat negatif 'Kamu malas belajar!' menjadi I-Message.",
      dailyLife: "Berhenti sejenak saat marah, tarik nafas, lalu bicara dengan nada rendah.",
    }]
  },
  {
    id: "psikologi-6",
    title: "Gangguan Belajar (Learning Disabilities)",
    category: ModuleCategory.PSIKOLOGI,
    summary: "Mengenali Disleksia, Diskalkulia, dan Disgrafia agar anak mendapatkan dukungan tepat.",
    sections: [{
      title: "Disleksia",
      content: "Kesulitan dalam memproses bahasa, terutama membaca dan mengeja.",
      explanation: "Ini bukan masalah kecerdasan, tapi cara otak memproses informasi yang berbeda.",
      learningActivity: "Simulasi Membaca: Orang tua/guru mencoba membaca teks yang hurufnya dibolak-balik untuk merasakan kesulitan anak disleksia.",
      dailyLife: "Gunakan media audio atau video untuk membantu anak yang sulit membaca teks panjang.",
    }]
  },
  {
    id: "psikologi-7",
    title: "Kecerdasan Majemuk (Multiple Intelligences)",
    category: ModuleCategory.PSIKOLOGI,
    summary: "Memahami 8 jenis kecerdasan menurut Howard Gardner.",
    sections: [{
      title: "Kecerdasan Intrapersonal vs Interpersonal",
      content: "Membedakan anak yang kuat dalam memahami diri sendiri vs memahami orang lain.",
      learningActivity: "Wheel of Intelligence: Siswa mewarnai roda kecerdasan untuk melihat potensi dominan mereka.",
      dailyLife: "Dukung minat anak meskipun tidak berkaitan langsung dengan mata pelajaran akademik di sekolah.",
    }]
  },
  {
    id: "psikologi-8",
    title: "Bullying & Dampak Psikologisnya",
    category: ModuleCategory.PSIKOLOGI,
    summary: "Mengenali tanda-tanda perundungan dan cara membangun resiliensi pada korban.",
    sections: [{
      title: "Cyberbullying",
      content: "Perundungan di dunia digital yang sering tidak terlihat oleh orang tua.",
      learningActivity: "Role-Play: Bagaimana cara merespons komentar jahat di media sosial dengan bijak.",
      dailyLife: "Membangun komunikasi terbuka agar anak berani melapor jika mengalami ketidaknyamanan.",
    }]
  },
  {
    id: "psikologi-9",
    title: "Peran Ayah dalam Psikologi Anak",
    category: ModuleCategory.PSIKOLOGI,
    summary: "Pentingnya 'Father Hunger' dan dampak kehadiran ayah bagi kemandirian anak.",
    sections: [{
      title: "Fathering vs Mothering",
      content: "Ayah cenderung mendorong eksplorasi dan keberanian mengambil risiko.",
      learningActivity: "Forum Ayah: Sesi berbagi pengalaman antar ayah dalam mengasuh anak di era digital.",
      dailyLife: "Meluangkan waktu 'One-on-One' antara ayah dan anak minimal 15 menit sehari tanpa gadget.",
    }]
  },
  {
    id: "psikologi-10",
    title: "Psikologi Perkembangan Moral",
    category: ModuleCategory.PSIKOLOGI,
    summary: "Tahapan penalaran moral Kohlberg: Dari takut hukuman hingga prinsip etika universal.",
    sections: [{
      title: "Tahap Konvensional",
      content: "Anak melakukan hal baik karena ingin dianggap 'anak baik' oleh lingkungan.",
      learningActivity: "Dilema Moral: Mendiskusikan kasus 'Heinz Dilemma' (mencuri obat demi menyelamatkan nyawa istri).",
      dailyLife: "Membantu anak memahami alasan di balik sebuah aturan, bukan sekadar 'karena dilarang'.",
    }]
  },

  // ==========================================
  // PEDAGOGIK: MODEL PEMBELAJARAN MODERN
  // ==========================================
  {
    id: "ped-model-1",
    title: "Problem Based Learning (PBL)",
    category: ModuleCategory.PEDAGOGIK,
    summary: "Berfokus pada masalah otentik dunia nyata untuk melatih berpikir kritis.",
    sections: [{
      title: "Sintaks Dasar",
      content: "Orientasi, Organisasi, Penyelidikan, Pengembangan, Analisis.",
      explanation: "Guru menyajikan masalah dilematis, siswa mencari solusi secara kolaboratif.",
      learningActivity: "Diskusikan: 'Bagaimana solusi syariah untuk mengatasi riba di lingkungan pasar?'",
      dailyLife: "Melatih anak mencari solusi saat mainannya rusak daripada langsung menangis.",
    }]
  },
  {
    id: "ped-model-2",
    title: "Project Based Learning (PjBL)",
    category: ModuleCategory.PEDAGOGIK,
    summary: "Pembelajaran berbasis proyek untuk menghasilkan karya nyata.",
    sections: [{
      title: "Output Berorientasi Produk",
      content: "Merancang, melaksanakan, dan mengevaluasi proyek jangka panjang.",
      learningActivity: "Proyek: Membuat maket Masjid Nabawi atau miniatur Ka'bah.",
      dailyLife: "Mengajak anak membuat prakarya dari barang bekas di rumah.",
    }]
  },
  {
    id: "ped-model-3",
    title: "Discovery Learning",
    category: ModuleCategory.PEDAGOGIK,
    summary: "Mendorong siswa menemukan konsep sendiri melalui eksplorasi.",
    sections: [{
      title: "Prinsip Penemuan",
      content: "Stimulasi, Identifikasi, Pengumpulan Data, Pengolahan, Verifikasi, Generalisasi.",
      learningActivity: "Eksperimen: Menemukan arah kiblat menggunakan bayangan matahari.",
      dailyLife: "Membiarkan anak mengutak-atik mainan untuk tahu cara kerjanya.",
    }]
  },
  {
    id: "ped-model-4",
    title: "Inquiry Learning",
    category: ModuleCategory.PEDAGOGIK,
    summary: "Berbasis pertanyaan mendalam untuk mengungkap kebenaran ilmiah.",
    sections: [{
      title: "Siklus Inkuri",
      content: "Observasi, Bertanya, Hipotesis, Eksperimen, Kesimpulan.",
      learningActivity: "Riset: Kenapa kita diperintahkan berwudhu sebelum shalat? (Mencari sisi kesehatan).",
      dailyLife: "Menjawab pertanyaan 'Kenapa' anak dengan riset bersama di buku.",
    }]
  },
  {
    id: "ped-model-5",
    title: "Contextual Teaching and Learning (CTL)",
    category: ModuleCategory.PEDAGOGIK,
    summary: "Mengaitkan materi dengan situasi nyata kehidupan siswa.",
    sections: [{
      title: "7 Komponen Utama",
      content: "Konstruktivisme, Inkuiri, Bertanya, Masyarakat Belajar, Pemodelan, Refleksi, Penilaian Otentik.",
      learningActivity: "Belajar Zakat dengan simulasi menghitung beras di gudang petani lokal.",
      dailyLife: "Menjelaskan konsep kejujuran saat berbelanja di warung tetangga.",
    }]
  },
  {
    id: "ped-model-6",
    title: "Flipped Classroom",
    category: ModuleCategory.PEDAGOGIK,
    summary: "Materi dipelajari di rumah, kelas untuk diskusi dan aplikasi.",
    sections: [{
      title: "Efisiensi Tatap Muka",
      content: "Siswa menonton video penjelasan di rumah, di kelas hanya tanya jawab dan proyek.",
      learningActivity: "Tugas: Nonton video sejarah Nabi semalam, besok di kelas sesi debat nilai moral.",
      dailyLife: "Membaca petunjuk permainan sebelum mulai bermain bersama.",
    }]
  },
  {
    id: "ped-model-7",
    title: "Blended Learning",
    category: ModuleCategory.PEDAGOGIK,
    summary: "Kombinasi belajar mandiri digital dan tatap muka.",
    sections: [{
      title: "Fleksibilitas Belajar",
      content: "Rotasi stasiun: digital, kelompok kecil, dan diskusi guru.",
      learningActivity: "Hafalan Quran via aplikasi aplikasi setoran langsung ke guru.",
      dailyLife: "Belajar bahasa lewat video YouTube sekaligus les privat.",
    }]
  },
  {
    id: "ped-model-8",
    title: "Cooperative Learning (Jigsaw)",
    category: ModuleCategory.PEDAGOGIK,
    summary: "Siswa menjadi ahli di satu bagian lalu mengajar teman kelompoknya.",
    sections: [{
      title: "Ketergantungan Positif",
      content: "Setiap anggota memegang kunci sukses kelompok melalui penguasaan materi berbeda.",
      learningActivity: "Materi: 4 Kitab Suci. Setiap anak ahli 1 kitab lalu sharing.",
      dailyLife: "Berbagi tugas piknik: satu bawa bekal, satu tenda, satu alat masak.",
    }]
  },
  {
    id: "ped-model-9",
    title: "Differentiated Instruction",
    category: ModuleCategory.PEDAGOGIK,
    summary: "Menyesuaikan cara mengajar dengan gaya belajar unik siswa.",
    sections: [{
      title: "Personalisasi Belajar",
      content: "Modifikasi konten, proses, dan produk sesuai minat siswa.",
      learningActivity: "Tugas akhir bebas pilih: bikin video, poster, atau tulisan tangan.",
      dailyLife: "Memberikan hadiah yang berbeda sesuai hobi masing-masing anak.",
    }]
  },
  {
    id: "ped-model-10",
    title: "Team Based Learning (TBL)",
    category: ModuleCategory.PEDAGOGIK,
    summary: "Pembelajaran berbasis tim dengan penekanan pada akuntabilitas individu dan tim.",
    sections: [{
      title: "Struktur TBL",
      content: "Preparation, Readiness Assurance, Application of Course Concepts.",
      learningActivity: "Ujian individu dulu, lalu ujian kelompok dengan soal yang sama, lalu diskusi.",
      dailyLife: "Diskusi keluarga menentukan anggaran pengeluaran bulanan.",
    }]
  },

  // ==========================================
  // PARENTING: DETAIL FASE USIA
  // ==========================================
  {
    id: "parenting-fase-1",
    title: "Fase 0-2 Tahun: Membangun Kepercayaan (Trust)",
    category: ModuleCategory.PARENTING,
    summary: "Fase krusial untuk keterikatan emosional (attachment) dan rasa aman.",
    sections: [{
      title: "Sentuhan dan Responsitas",
      content: "Segera merespon tangisan dan memberikan banyak sentuhan fisik (skin-to-skin).",
      explanation: "Di usia ini, bayi belajar apakah dunia ini tempat yang aman atau tidak.",
      learningActivity: "Baby Massage: Melakukan pijat bayi lembut sambil berbisik doa-doa kebaikan.",
      dailyLife: "Menatap mata bayi saat menyusui atau memberi makan.",
    }]
  },
  {
    id: "parenting-fase-2",
    title: "Fase 2-7 Tahun: Eksplorasi & Imajinasi",
    category: ModuleCategory.PARENTING,
    summary: "Masa anak melihat orang tua sebagai raja/ratu dan meniru segala hal.",
    sections: [{
      title: "Disiplin Lemah Lembut",
      content: "Gunakan kalimat positif daripada larangan 'Jangan'.",
      explanation: "Anak usia ini belum paham logika abstrak, mereka paham contoh nyata.",
      learningActivity: "Role-Play: Bermain peran menjadi pedagang jujur atau pahlawan penolong.",
      dailyLife: "Memberitahu 'Jalan pelan-pelan ya' daripada 'Jangan lari!'.",
    }]
  },
  {
    id: "parenting-fase-3",
    title: "Fase 7-10 Tahun: Formasi Kebiasaan (Tamyiz)",
    category: ModuleCategory.PARENTING,
    summary: "Masa anak mulai bisa membedakan yang baik dan buruk secara logika sederhana.",
    sections: [{
      title: "Pembiasaan Ibadah",
      content: "Mulai diperintahkan shalat dengan cara yang menyenangkan tanpa paksaan keras.",
      explanation: "Sesuai hadis, kenalkan shalat di usia 7 tahun.",
      learningActivity: "Star Chart: Memberikan stiker bintang setiap anak shalat tepat waktu.",
      dailyLife: "Melibatkan anak dalam ibadah sosial seperti membagikan nasi kotak ke dhuafa.",
    }]
  },
  {
    id: "parenting-fase-4",
    title: "Fase 10-14 Tahun: Transisi & Akil Baligh",
    category: ModuleCategory.PARENTING,
    summary: "Masa prapuber di mana hormon mulai berubah dan anak mencari identitas.",
    sections: [{
      title: "Dialog Logika & Tanggung Jawab",
      content: "Berikan alasan di balik aturan agama (kenapa harus menutup aurat, dst).",
      explanation: "Anak mulai mengkritisi aturan, maka butuh penjelasan logis.",
      learningActivity: "Q&A Box: Kotak pertanyaan rahasia tentang perubahan tubuh atau perasaan.",
      dailyLife: "Mengajak anak diskusi tentang berita viral dari sudut pandang Islam.",
    }]
  },
  {
    id: "parenting-fase-5",
    title: "Fase 14-18 Tahun: Sahabat & Independensi",
    category: ModuleCategory.PARENTING,
    summary: "Orang tua berperan sebagai konsultan/sahabat, bukan lagi penguasa.",
    sections: [{
      title: "Membangun Kepercayaan Diri",
      content: "Berikan ruang privasi dan tanggung jawab penuh atas pilihan mereka.",
      explanation: "Remaja butuh merasa dihargai pendapatnya agar tidak memberontak.",
      learningActivity: "Deep Talk: Ngopi/ngeteh bareng tanpa nasehat, hanya mendengarkan ceritanya.",
      dailyLife: "Minta pendapat remaja saat keluarga akan membeli barang atau pindah rumah.",
    }]
  }
];
