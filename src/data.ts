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
  },

  // ==========================================
  // BULAN HIJRIYAH & KISAH
  // ==========================================
  {
    id: "hijriyah-1",
    title: "Mengenal 12 Bulan Hijriyah",
    category: ModuleCategory.HIJRIYAH,
    summary: "Urutan bulan dalam kalender Islam beserta makna dan peristiwa pentingnya.",
    sections: [
      {
        title: "Kalender Qomariyah",
        content: "Sistem penanggalan berdasarkan peredaran bulan yang dimulai sejak peristiwa Hijrah Rasulullah.",
        explanation: "12 Bulan: Muharram, Safar, Rabiul Awal, Rabiul Akhir, Jumadil Uwal, Jumadil Akhir, Rajab, Sya'ban, Ramadhan, Syawal, Dzulqa'dah, Dzulhijjah.",
        learningActivity: "Bernyanyi Nama Bulan: Menghafal urutan bulan Hijriyah melalui lagu anak islami.",
        dailyLife: "Mengecek tanggal Hijriyah setiap hari untuk mengetahui waktu-waktu sunnah ibadah."
      },
      {
        title: "Kisah Bulan-Bulan Mulia",
        content: "Peristiwa besar yang terjadi pada bulan-bulan tertentu.",
        subsections: [
          { title: "Muharram", content: "Bulan kemenangan Nabi Musa atas Fir'aun dan hijrahnya Nabi Muhammad." },
          { title: "Rabiul Awal", content: "Bulan kelahiran Baginda Nabi Muhammad SAW (Maulid)." },
          { title: "Ramadhan", content: "Bulan turunnya Al-Qur'an dan kewajiban puasa." },
          { title: "Dzulhijjah", content: "Bulan pelaksanaan Ibadah Haji dan kurban." }
        ],
        learningActivity: "Storytelling: Menceritakan kembali kisah kepahlawanan Nabi di bulan Muharram.",
        dailyLife: "Meningkatkan kualitas ibadah di bulan-bulan haram (suci)."
      }
    ]
  },

  // ==========================================
  // KISAH 25 NABI & RASUL
  // ==========================================
  {
    id: "prophets-1",
    title: "Timeline & Mukjizat 25 Nabi",
    category: ModuleCategory.PROPHETS,
    summary: "Sejarah perjuangan para utusan Allah mulai dari Nabi Adam AS hingga Nabi Muhammad SAW.",
    sections: [
      {
        title: "Nabi Ulul Azmi",
        content: "Lima Rasul yang memiliki keteguhan hati luar biasa dalam menghadapi rintangan dakwah.",
        explanation: "Nuh AS (Bertahan pada banjir besar), Ibrahim AS (Sabar saat dibakar), Musa AS (Melawan Fir'aun), Isa AS (Sabar dengan kaumnya), Muhammad SAW (Penyempurna ajaran).",
        learningActivity: "Peta Perjalanan: Menggambar peta dakwah para Nabi Ulul Azmi di Timur Tengah.",
        dailyLife: "Meneladani kesabaran para Nabi saat menghadapi kesulitan belajar atau pergaulan."
      },
      {
        title: "Keluarga Besar 25 Nabi (A-Z)",
        content: "Daftar lengkap 25 Nabi yang wajib diketahui beserta poin utama kisahnya.",
        subsections: [
          { title: "1. Adam AS", content: "Lahir: - | Wafat: - | Usia: 930 Thn | Kota Lahir: Surga (Lalu ke Bumi) | Dakwah: Seluruh Bumi (Awal Manusia)." },
          { title: "2. Idris AS", content: "Lahir: 4433 SM | Wafat: 4351 SM | Usia: 82 Thn | Kota Lahir: Munaf (Mesir) | Dakwah: Irak (Babilonia) & Mesir." },
          { title: "3. Nuh AS", content: "Lahir: 3993 SM | Wafat: 3043 SM | Usia: 950 Thn | Kota Lahir: Mesopotamia (Irak) | Dakwah: Wilayah Selatan Irak." },
          { title: "4. Hud AS", content: "Lahir: 2450 SM | Wafat: 2320 SM | Usia: 130 Thn | Kota Lahir: Al-Ahqaf (Yaman) | Dakwah: Kaum 'Ad (Yaman Selatan)." },
          { title: "5. Shaleh AS", content: "Lahir: 2150 SM | Wafat: 2080 SM | Usia: 70 Thn | Kota Lahir: Al-Hijr (Saudi) | Dakwah: Kaum Tsamud (Madain Shaleh)." },
          { title: "6. Ibrahim AS", content: "Lahir: 1997 SM | Wafat: 1822 SM | Usia: 175 Thn | Kota Lahir: Babilonia (Irak) | Dakwah: Irak, Palestina, Mesir & Hijaz." },
          { title: "7. Luth AS", content: "Lahir: 1950 SM | Wafat: 1870 SM | Usia: 80 Thn | Kota Lahir: Irak | Dakwah: Laut Mati (Sodom & Amora, Yordania)." },
          { title: "8. Ismail AS", content: "Lahir: 1911 SM | Wafat: 1774 SM | Usia: 137 Thn | Kota Lahir: Palestina | Dakwah: Makkah (Suku Jurhum)." },
          { title: "9. Ishaq AS", content: "Lahir: 1897 SM | Wafat: 1717 SM | Usia: 180 Thn | Kota Lahir: Palestina (Hebron) | Dakwah: Kan'an (Palestina & Syam)." },
          { title: "10. Ya'qub AS", content: "Lahir: 1837 SM | Wafat: 1690 SM | Usia: 147 Thn | Kota Lahir: Palestina | Dakwah: Kan'an & Mesir." },
          { title: "11. Yusuf AS", content: "Lahir: 1745 SM | Wafat: 1635 SM | Usia: 110 Thn | Kota Lahir: Palestina (Faddan Aram) | Dakwah: Mesir." },
          { title: "12. Ayyub AS", content: "Lahir: 1630 SM | Wafat: 1538 SM | Usia: 92 Thn | Kota Lahir: Syam (Hauran) | Dakwah: Dataran Hauran (Yordania/Syam)." },
          { title: "13. Syu'aib AS", content: "Lahir: 1600 SM | Wafat: 1490 SM | Usia: 110 Thn | Kota Lahir: Madyan (Semenanjung Arab) | Dakwah: Kaum Madyan & Aikah." },
          { title: "14. Musa AS", content: "Lahir: 1527 SM | Wafat: 1407 SM | Usia: 120 Thn | Kota Lahir: Mesir | Dakwah: Mesir & Gurun Sinai." },
          { title: "15. Harun AS", content: "Lahir: 1530 SM | Wafat: 1408 SM | Usia: 122 Thn | Kota Lahir: Mesir | Dakwah: Membantu Nabi Musa di Mesir." },
          { title: "16. Dzulkifli AS", content: "Lahir: 1500 SM | Wafat: 1425 SM | Usia: 75 Thn | Kota Lahir: Irak | Dakwah: Damaskus & Sekitarnya (Syam)." },
          { title: "17. Daud AS", content: "Lahir: 1041 SM | Wafat: 971 SM | Usia: 70 Thn | Kota Lahir: Palestina (Betlehem) | Dakwah: Palestina (Baitul Maqdis)." },
          { title: "18. Sulaiman AS", content: "Lahir: 989 SM | Wafat: 931 SM | Usia: 58 Thn | Kota Lahir: Palestina (Yerusalem) | Dakwah: Palestina & Sekitarnya." },
          { title: "19. Ilyas AS", content: "Lahir: 910 SM | Wafat: 850 SM | Usia: 60 Thn | Kota Lahir: Syam (Ba'albak) | Dakwah: Ba'albak (Lebanon/Syam)." },
          { title: "20. Ilyasa AS", content: "Lahir: 885 SM | Wafat: 795 SM | Usia: 90 Thn | Kota Lahir: Syam | Dakwah: Bani Israil & Kaum Ba'albak." },
          { title: "21. Yunus AS", content: "Lahir: 820 SM | Wafat: 750 SM | Usia: 70 Thn | Kota Lahir: Ninawa (Irak) | Dakwah: Kaum Ninawa (Irak Utara)." },
          { title: "22. Zakaria AS", content: "Lahir: 100 SM | Wafat: 20 M | Usia: 120 Thn | Kota Lahir: Palestina | Dakwah: Palestina (Baitul Maqdis)." },
          { title: "23. Yahya AS", content: "Lahir: 1 SM | Wafat: 31 M | Usia: 32 Thn | Kota Lahir: Palestina | Dakwah: Kan’an (Palestina & Yordania)." },
          { title: "24. Isa AS", content: "Lahir: 1 SM | Diangkat: 33 M | Usia: 33 Thn | Kota Lahir: Betlehem (Palestina) | Dakwah: Bani Israil (Palestina)." },
          { title: "25. Muhammad SAW", content: "Lahir: 571 M | Wafat: 632 M | Usia: 63 Thn | Kota Lahir: Makkah | Dakwah: Makkah & Madinah (Seluruh Alam)." }
        ],
        learningActivity: "Peta Pohon Nabi: Membuat bagan silsilah atau urutan nabi 1-25 dengan hiasan kreatif.",
        dailyLife: "Membaca kisah satu nabi setiap minggu untuk diambil inspirasi kebaikannya."
      },
      {
        title: "Mukjizat Para Nabi",
        content: "Kelebihan luar biasa yang diberikan Allah sebagai bukti kebenaran risalah.",
        subsections: [
          { title: "Nabi Sulaiman AS", content: "Bisa bicara dengan hewan dan memerintah jin." },
          { title: "Nabi Ibrahim AS", content: "Tidak hangus saat dibakar api Raja Namrud." },
          { title: "Nabi Musa AS", content: "Tongkat menjadi ular dan membelah Laut Merah." },
          { title: "Nabi Isa AS", content: "Menyembuhkan orang buta dan menghidupkan orang mati (izin Allah)." },
          { title: "Nabi Muhammad SAW", content: "Al-Qur'an, Isra Mi'raj, dan terbelahnya bulan." }
        ],
        learningActivity: "Quiz Mukjizat: Mencocokkan nama Nabi dengan mukjizat yang dimilikinya.",
        dailyLife: "Yakin bahwa pertolongan Allah selalu ada bagi hamba yang beriman."
      }
    ]
  },

  // ==========================================
  // 10 MALAIKAT & TUGASNYA
  // ==========================================
  {
    id: "angels-1",
    title: "Mengimani 10 Malaikat Utama",
    category: ModuleCategory.ANGELS,
    summary: "Tugas-tugas spesifik para malaikat dalam mengatur alam semesta dan mencatat amal manusia.",
    sections: [
      {
        title: "Daftar Malaikat & Tugasnya",
        content: "Makhluk cahaya yang selalu taat dan tidak pernah membangkang perintah Allah.",
        subsections: [
          { title: "Jibril", content: "Menyampaikan wahyu kepada Nabi dan Rasul." },
          { title: "Mikail", content: "Membagi rezeki dan mengatur fenomena alam (hujan/angin)." },
          { title: "Israfil", content: "Meniup sangkakala pada hari kiamat." },
          { title: "Izrail", content: "Mencabut nyawa setiap makhluk hidup." },
          { title: "Munkar & Nakir", content: "Menanya manusia di dalam alam kubur." },
          { title: "Raqib & Atid", content: "Mencatat amal baik dan amal buruk manusia." },
          { title: "Malik & Ridwan", content: "Menjaga pintu neraka dan pintu surga." }
        ],
        learningActivity: "Flashcard: Menghafal 10 Malaikat beserta tugas masing-masing secara interaktif.",
        dailyLife: "Merasa diawasi (Muraqabah) oleh Raqib dan Atid sehingga takut berbuat dosa."
      }
    ]
  },

  // ==========================================
  // RUKUN IMAN & ISLAM
  // ==========================================
  {
    id: "pillars-1",
    title: "Rukun Islam: 5 Pilar Utama",
    category: ModuleCategory.PILLARS,
    summary: "Lima fondasi utama perbuatan lahiriyah seorang muslim sebagai bukti ketaatan.",
    sections: [
      {
        title: "1. Syahadat: Persaksian Tauhid",
        content: "Mengakui dengan lisan dan meyakini dalam hati bahwa tidak ada Tuhan selain Allah dan Muhammad adalah utusan Allah.",
        explanation: "Kalimat 'Laa ilaa ha illallah, Muhammadur Rasulullah' adalah kunci masuk Islam.",
        learningActivity: "Refleksi Makna: Menuliskan apa pengaruh kalimat syahadat dalam menjaga integritas diri setiap hari.",
        dailyLife: "Menjauhi segala bentuk kemusyrikan dan menjadikan Rasulullah sebagai satu-satunya teladan hidup."
      },
      {
        title: "2. Shalat: Tiang Agama",
        content: "Melaksanakan ibadah wajib lima waktu sehari semalam.",
        explanation: "Shalat adalah sarana komunikasi langsung antara hamba dengan Tuhannya.",
        learningActivity: "Praktik Khusyuk: Berlatih teknik pernapasan dan pemaknaan bacaan shalat agar lebih tenang.",
        dailyLife: "Mendisiplinkan waktu dengan selalu mengutamakan panggilan adzan di atas aktivitas lainnya."
      },
      {
        title: "3. Zakat: Pensuci Harta",
        content: "Mengeluarkan sebagian harta tertentu untuk diberikan kepada golongan yang berhak (mustahik).",
        explanation: "Zakat membersihkan jiwa dari sifat kikir dan harta dari hak orang lain.",
        learningActivity: "Simulasi Mudzaki: Menghitung zakat mal dari skenario tabungan selama satu tahun.",
        dailyLife: "Gemar berbagi dan peduli terhadap kesulitan ekonomi tetangga atau teman."
      },
      {
        title: "4. Puasa: Madrasah Kesabaran",
        content: "Menahan diri dari makan, minum, dan hal-hal yang membatalkannya dari terbit fajar hingga terbenam matahari.",
        explanation: "Puasa melatih kontrol diri (self-control) dan rasa empati kepada kaum dhuafa.",
        learningActivity: "Tips Puasa Sehat: Berdiskusi tentang asupan nutrisi saat sahur dan buka sesuai sunnah Nabi.",
        dailyLife: "Mampu menahan amarah dan menjaga lisan dari perkataan sia-sia meskipun sedang lapar."
      },
      {
        title: "5. Haji: Puncak Ibadah",
        content: "Melakukan perjalanan suci ke Baitullah Makkah sekali seumur hidup bagi yang mampu secara fisik dan finansial.",
        explanation: "Haji adalah simbol persatuan umat Islam sedunia tanpa memandang kasta atau ras.",
        learningActivity: "Manasik Haji: Mempelajari filosofi di balik simbol-simbol haji (Tawaf, Sa'i, Wukuf).",
        dailyLife: "Memupuk semangat pengorbanan dan kerinduan untuk menyempurnakan rukun Islam."
      }
    ]
  },
  {
    id: "pillars-2",
    title: "Rukun Iman: 6 Fondasi Keyakinan",
    category: ModuleCategory.PILLARS,
    summary: "Enam pilar batiniah yang membangun cara pandang seorang muslim terhadap Tuhan, alam, dan hari akhir.",
    sections: [
      {
        title: "1. Iman kepada Allah",
        content: "Yakin sepenuhnya bahwa Allah adalah satu-satunya Pencipta, Pemilik, dan Pengatur alam semesta.",
        explanation: "Tauhid adalah inti dari seluruh ajaran Islam.",
        learningActivity: "Tadabbur Alam: Mengamati keteraturan alam semesta sebagai bukti keberadaan Sang Perancang Agung.",
        dailyLife: "Hanya menggantungkan harapan dan doa kepada Allah semata (Tawakkal)."
      },
      {
        title: "2. Iman kepada Malaikat",
        content: "Yakin bahwa Allah menciptakan malaikat dari cahaya sebagai makhluk yang selalu taat.",
        explanation: "Malaikat memiliki tugas-tugas khusus yang mendukung keteraturan alam dan mendukung manusia.",
        learningActivity: "Table Tugas: Menghubungkan fenomena alam (hujan, rezeki) dengan malaikat yang bertugas.",
        dailyLife: "Selalu berbuat baik karena merasa diawasi oleh malaikat Raqib dan Atid."
      },
      {
        title: "3. Iman kepada Kitab-Kitab Allah",
        content: "Yakin bahwa Allah menurunkan wahyu melalui para Rasul sebagai pedoman hidup.",
        explanation: "Kitab-kitab (Taurat, Zabur, Injil, Al-Qur'an) berisi petunjuk untuk kebahagiaan dunia dan akhirat.",
        learningActivity: "Literasi Wahyu: Mengkaji pesan moral utama yang ada dalam setiap kitab suci.",
        dailyLife: "Menjadikan Al-Qur'an sebagai referensi utama dalam memutuskan sebuah perkara."
      },
      {
        title: "4. Iman kepada Rasul-Rasul Allah",
        content: "Yakin bahwa Allah memilih manusia terbaik untuk menyampaikan risalah-Nya.",
        explanation: "Rasul adalah teladan nyata (uswatun hasanah) dalam memperjuangkan kebenaran.",
        learningActivity: "Biografi Singkat: Menuliskan satu sifat nabi yang paling ingin diteladani dalam profesi impian.",
        dailyLife: "Menghidupkan sunnah-sunnah kecil Rasulullah dalam pergaulan sehari-hari."
      },
      {
        title: "5. Iman kepada Hari Akhir",
        content: "Yakin bahwa kehidupan dunia akan berakhir dan akan ada hari pembalasan.",
        explanation: "Keyakinan ini membuat manusia visioner dan berhati-hati dalam bertindak.",
        learningActivity: "Muhasabah Akhirat: Membayangkan sisa umur yang ada dan apa investasi terbaik untuk akhirat.",
        dailyLife: "Selalu jujur dan amanah karena yakin setiap perbuatan akan ada 'audit' di hari kiamat."
      },
      {
        title: "6. Iman kepada Qada dan Qadar",
        content: "Yakin bahwa segala sesuatu yang terjadi di alam semesta telah ditetapkan oleh Allah.",
        explanation: "Meliputi ketetapan yang sudah terjadi (Qada) dan potensi yang bisa diusahakan (Qadar/Takdir).",
        learningActivity: "Matriks Ikhtiar: Memisahkan hal yang bisa kita kendalikan (usaha) dan hal yang hanya bisa diterima (hasil).",
        dailyLife: "Tidak putus asa saat gagal dan tidak sombong saat berhasil."
      }
    ]
  },

  // ==========================================
  // 99 ASMAUL HUSNA
  // ==========================================
  {
    id: "asmaul-husna-1",
    title: "99 Nama Indah Allah (Asmaul Husna) Terlengkap",
    category: ModuleCategory.ASMAUL_HUSNA,
    summary: "Mengenal sifat, pengamalan nyata, dan doa melalui 99 Nama Allah dalam kehidupan sehari-hari.",
    sections: [
      {
        title: "Fadilah & Cara Berdoa",
        content: "Allah berfirman: 'Hanya milik Allah asmaul-husna, maka bermohonlah kepada-Nya dengan menyebut asmaul-husna itu.' (QS. Al-A'raf: 180)",
        explanation: "Kunci diterimanya doa adalah dengan memuji Allah menggunakan nama-Nya yang relevan dengan hajat kita.",
        learningActivity: "Zikir Pagi: Melazimi pembacaan 99 Asmaul Husna dengan penuh tadabbur makna.",
        dailyLife: "Membangun kedekatan batin dengan Allah melalui pengenalan sifat-sifat-Nya."
      },
      {
        title: "1-20: Sifat Keagungan & Belas Kasih",
        content: "Daftar 20 nama pertama yang menekankan pada sifat ketuhanan (Rububiyah) dan kasih sayang (Rahmaniyah).",
        subsections: [
          { title: "Ar-Rahman (Maha Pengasih)", content: "Pengamalan: Menyayangi semua makhluk tanpa pilih kasih. Doa: 'Ya Rahman, kasihilah kami dengan rahmat-Mu yang luas.'" },
          { title: "Ar-Rahim (Maha Penyayang)", content: "Pengamalan: Memberikan kasih sayang khusus kepada sesama mukmin. Doa: 'Ya Rahim, sayangi kami di dunia dan akhirat.'" },
          { title: "Al-Malik (Maha Raja)", content: "Pengamalan: Tidak sombong karena semua kekuasaan adalah milik Allah. Doa: 'Ya Malik, berikanlah kami kekuasaan yang berkah.'" },
          { title: "Al-Quddus (Maha Suci)", content: "Pengamalan: Menjaga kebersihan hati dan lahir. Doa: 'Ya Quddus, sucikanlah hati kami dari sifat buruk.'" },
          { title: "As-Salam (Maha Sejahtera)", content: "Pengamalan: Menjadi penebar kedamaian bagi orang lain. Doa: 'Ya Salam, berikanlah keselamatan dan kedamaian di rumah kami.'" },
          { title: "Al-Mu'min (Maha Memberi Keamanan)", content: "Pengamalan: Memberikan rasa aman kepada tetangga. Doa: 'Ya Mu'min, jagalah keamanan negeri dan keluarga kami.'" },
          { title: "Al-Muhaimin (Maha Memelihara)", content: "Pengamalan: Bertanggung jawab menjaga amanah yang diberikan. Doa: 'Ya Muhaimin, peliharalah kami dari godaan fitnah.'" },
          { title: "Al-Aziz (Maha Perkasa)", content: "Pengamalan: Kuat dalam prinsip kebenaran. Doa: 'Ya Aziz, kuatkanlah iman kami agar tidak goyah.'" },
          { title: "Al-Jabbar (Maha Gagah)", content: "Pengamalan: Tidak memaksakan kehendak dengan dzalim. Doa: 'Ya Jabbar, perbaikilah urusan kami yang sedang carut-marut.'" },
          { title: "Al-Mutakabbir (Maha Megah)", content: "Pengamalan: Tawadhu (rendah hati) karena hanya Allah yang berhak Megah. Doa: 'Ya Mutakabbir, jauhkan kami dari sifat riya dan ujub.'" }
        ]
      },
      {
        title: "21-40: Sifat Penciptaan & Pemberian",
        content: "Nama-nama yang berkaitan dengan proses penciptaan alam semesta dan distribusi karunia kepada makhluk.",
        subsections: [
          { title: "Al-Khaliq (Maha Pencipta)", content: "Pengamalan: Menghargai inovasi dan kreasi positif. Doa: 'Ya Khaliq, ciptakanlah ide-ide cemerlang untuk kebermanfaatan umat.'" },
          { title: "Al-Bari' (Maha Melepaskan)", content: "Pengamalan: Membantu orang lain lepas dari kesulitan. Doa: 'Ya Bari', lepaskanlah kami dari belenggu hutang dan dosa.'" },
          { title: "Al-Mushawwir (Maha Membentuk)", content: "Pengamalan: Bersyukur atas bentuk tubuh yang diberikan. Doa: 'Ya Mushawwir, baguskanlah akhlak kami sebagaimana Engkau baguskan rupa kami.'" },
          { title: "Al-Ghaffar (Maha Pengampun)", content: "Pengamalan: Mudah memaafkan kesalahan orang lain. Doa: 'Ya Ghaffar, ampuni dosa kami yang melampaui batas.'" },
          { title: "Al-Qahhar (Maha Menaklukkan)", content: "Pengamalan: Menundukkan nafsu buruk dalam diri. Doa: 'Ya Qahhar, tundukkanlah musuh-musuh Islam yang sedang berbuat dzalim.'" },
          { title: "Al-Wahhab (Maha Pemberi Karunia)", content: "Pengamalan: Gemar memberi tanpa mengharap balasan. Doa: 'Ya Wahhab, limpahkanlah karunia-Mu yang tak terputus.'" },
          { title: "Ar-Razzaq (Maha Pemberi Rezeki)", content: "Pengamalan: Sedekah setiap hari meskipun sedikit. Doa: 'Ya Razzaq, bukakanlah pintu rezeki dari jalan yang tidak disangka-sangka.'" },
          { title: "Al-Fattah (Maha Pembuka)", content: "Pengamalan: Membantu memberi jalan keluar bagi masalah orang. Doa: 'Ya Fattah, bukakanlah pintu rahmat dan ilmu bagi kami.'" },
          { title: "Al-'Alim (Maha Mengetahui)", content: "Pengamalan: Terus belajar karena ilmu Allah luas. Doa: 'Ya 'Alim, tambahkanlah kepada kami ilmu yang bermanfaat.'" },
          { title: "Al-Qabidh (Maha Menyempitkan)", content: "Pengamalan: Sabar saat ekonomi atau urusan sedang sempit. Doa: 'Ya Qabidh, bimbinglah kami agar tetap ridha saat Engkau menguji lewat kesempitan.'" }
        ]
      },
      {
        title: "Lengkap 99 Nama (Zikir & Doa Ringkas)",
        content: "Daftar 99 Asmaul Husna beserta penggalan Doa Tawassul singkat untuk setiap namanya.",
        explanation: "Latihlah untuk memanggil Allah dengan Nama-Nya sebelum mengutarakan doa spesifikmu.",
        subsections: [
          { title: "41-50: Al-Basith s/d Al-Ba'its", content: "Ya Basith (Lapangkan kami), Ya Khafidz (Rendahkan kesombongan kami), Ya Rafi' (Angkat derajat kami), Ya Mu'izz (Muliakan kami), Ya Mudzill (Hinakan nafsu kami), Ya Sami' (Dengar doa kami), Ya Bashir (Lihat amal kami), Ya Hakam (Adili urusan kami), Ya 'Adl (Berlaku adillah pada kami), Ya Lathif (Lembutkan hati kami)." },
          { title: "51-60: Al-Khabir s/d Al-Halim", content: "Ya Khabir (Teliti niat kami), Ya Halim (Beri kami kesabaran), Ya 'Azhim (Agungkan iman kami), Ya Ghafur (Maafkan khilaf kami), Ya Syakur (Terima syukur kami), Ya 'Aliy (Tinggikan visi kami), Ya Kabir (Besarkan tekad kami), Ya Hafizh (Jaga keluarga kami), Ya Muqit (Berkahi makan kami), Ya Hasib (Hisablah kami dengan rahmat-Mu)." },
          { title: "61-70: Al-Jalil s/d Al-Wakil", content: "Ya Jalil (Tampakkan keagungan Islam), Ya Karim (Muliakan tamu kami), Ya Raqib (Awasi kami dari maksiat), Ya Mujib (Kabulkanlah doa kami), Ya Wasi' (Luaskan pengetahuan kami), Ya Hakim (Bijaksanakan lisan kami), Ya Wadud (Cintai kami), Ya Majid (Muliakan sejarah kami), Ya Ba'its (Bangkitkan semangat kami), Ya Syahid (Saksikan taubat kami)." },
          { title: "71-80: Al-Haqq s/d Al-Qayyum", content: "Ya Haqq (Tegakkan kebenaran), Ya Wakil (Kami berserah pada-Mu), Ya Qawiy (Kuatkan raga kami), Ya Matin (Kokohkan prinsip kami), Ya Waliy (Jadilah pelindung kami), Ya Hamid (Hanya Engkau yang terpuji), Ya Muhshi (Hitunglah pahala kami), Ya Mubdi' (Awali sukses kami), Ya Mu'id (Kembalikan kejayaan kami), Ya Muhyi (Hidupkan jiwa kami)." },
          { title: "81-99: Al-Mumit s/d Ash-Shabur", content: "Ya Mumit (Matikan kami dalam Husnul Khatimah), Ya Hayy (Berikan hidup yang berkah), Ya Qayyum (Mandirikan kami), Ya Wajid (Temukan kami dengan petunjuk), Ya Majid (Muliakan langkah kami), Ya Wahid (Satukan visi kami), Ya Ahad (Eskan niat kami), Ya Shamad (Tempat kami meminta), Ya Qadir (Mampukan cita-cita kami), Ya Muqtadir (Berkuasalah atas nasib kami), Ya Muqaddim (Dahulukan kebaikan bagi kami), Ya Mu'akhkhir (Akhirkan kami dengan selamat), Ya Awwal (Awali hari kami), Ya Akhir (Akhiri usia kami dengan iman), Ya Zhahir (Tampakkan cahaya ilmu), Ya Bathin (Bersihkan rahasia hati), Ya Wali (Pimpinlah pemimpin kami), Ya Muta'ali (Tinggikan derajat guru), Ya Barr (Kebaikan-Mu abadi), Ya Tawwab (Terima taubat kami), Ya Muntaqim (Balaslah keadilan), Ya 'Afuww (Hapus duka kami), Ya Ra'uf (Belas kasihilah kami), Ya Malikul Mulk (Pemilik semesta), Ya Dzul Jalali wal Ikram (Pemilik kemuliaan), Ya Muqsith (Tegakkan adil), Ya Jami' (Satukan hati kami), Ya Ghaniy (Kayakan batin kami), Ya Mughni (Cukupkan kebutuhan kami), Ya Mani' (Cegah kami dari maksiat), Ya Adh-Dhar (Pemberi derita agar kami sadar), Ya Nafi' (Beri kami manfaat), Ya Nur (Terangi jalan kami), Ya Hadi (Beri kami hidayah), Ya Badi' (Pencipta Keindahan), Ya Baqi (Yang kekal), Ya Warits (Wariskan ilmu-Mu), Ya Rasyid (Tunjukkan kebenaran), Ya Shabur (Sabar dalam ujian)." }
        ],
        learningActivity: "Katalog Doa: Membuat kartu-kartu kecil berisi 1 Nama Allah dan 1 Doa terkait untuk dibawa di saku.",
        dailyLife: "Membiasakan diri mengucapkan salah satu Asmaul Husna saat melihat peristiwa yang relevan (misal: Subhanallah Ya Razzaq saat melihat panen melimpah)."
      }
    ]
  },
  {
    id: "mahfudzat-1",
    title: "Mahfudzat: Kata Mutiara Islami",
    category: ModuleCategory.MAHFUDZAT,
    summary: "Kumpulan kata bijak bahasa Arab yang penuh hikmah dan motivasi hidup.",
    sections: [
      {
        title: "Motivasi & Kesungguhan",
        content: "Nasihat tentang pentingnya usaha keras dan kejujuran.",
        learningActivity: "Metode Setoran & Syarah: Peserta didik menghafal kata-kata mutiara dan menjelaskan maknanya di depan kelas menggunakan bahasa mereka sendiri.",
        dailyLife: "Menjadikan mahfudzat sebagai pengingat (notifikasi) harian dalam berinteraksi dengan teman dan guru.",
        subsections: [
          {
            title: "Man Jadda Wajada",
            content: "مَنْ جَدَّ وَجَدَ Meaning: Siapa yang bersungguh-sungguh, maka dia akan berhasil.",
            explanation: "Kesuksesan bukanlah hasil dari keberuntungan semata, melainkan buah dari kerja keras dan ketekunan yang konsisten."
          },
          {
            title: "Man Sabara Zhafira",
            content: "مَنْ صَبَرَ ظَفِرَ Meaning: Siapa yang bersabar, maka dia akan beruntung.",
            explanation: "Sabar adalah kunci kemenangan. Orang yang mampu menahan diri dan tetap istiqamah dalam kesulitan akan meraih hasil yang manis."
          },
          {
            title: "Man Sara 'Ala Darbi Wasala",
            content: "مَنْ سَارَ عَلَى الدَّرْبِ وَصَلَ Meaning: Barang siapa berjalan pada jalannya, maka sampailah ia.",
            explanation: "Pentingnya memiliki visi dan tujuan yang jelas (jalur) agar usaha kita tidak sia-sia dan sampai pada target yang diinginkan."
          },
          {
            title: "Jalisul Khairi Ghonimah",
            content: "جَلِيْسُ الخَيْرِ غَنِيْمَةٌ Meaning: Teman duduk yang baik adalah keuntungan (harta rampasan).",
            explanation: "Memiliki teman yang shalih dan bijak adalah keberuntungan besar karena mereka akan membawa kita pada kebaikan."
          },
          {
            title: "Al-Waqtu Atsmanu Minad Dzahabi",
            content: "وَقْتُ أَثْمَنُ مِنَ الذَّهَبِ Meaning: Waktu itu lebih berharga daripada emas.",
            explanation: "Emas yang hilang bisa dicari lagi, tapi waktu yang lewat tidak akan pernah kembali. Gunakan waktu seefektif mungkin."
          },
          {
            title: "Idza Shadaqa al-'Azmu",
            content: "إِذَا صَدَقَ العَزْمُ وَضَحَ السَّبِيْلُ Meaning: Jika benar kemauannya, niscaya terbukalah jalannya.",
            explanation: "Tekad yang kuat akan membantu kita menemukan jalan keluar dari setiap kesulitan."
          },
          {
            title: "Man Ta'anna Naala Ma Taman-na",
            content: "مَنْ تَأَنَّى نَالَ مَا تَمَنَّى Meaning: Barangsiapa berhati-hati niscaya mendapatkan apa yang ia cita-citakan.",
            explanation: "Ketelitian and kesabaran dalam melangkah akan mengantarkan kita pada tujuan dengan selamat and sukses."
          },
          {
            title: "Bi al-Imtihani Yukramu al-Mar'u",
            content: "بالاِمْتِحَانِ يُكْرَمُ المَرْءُ أَوْ يُهَانُ Meaning: Dengan ujian seseorang itu menjadi mulia atau menjadi hina.",
            explanation: "Ujian adalah wahana pembuktian kualitas diri. Hadapi tantangan untuk meraih derajat yang lebih tinggi."
          },
          {
            title: "Ad-Dahru Yaumaani",
            content: "الدَّهْرُ يَوْمَانِ يَوْمٌ لَكَ وَيَوْمٌ عَلَيْكَ Meaning: Waktu itu ada dua hari, hari untukmu and hari melawanmu.",
            explanation: "Roda kehidupan selalu berputar; bersyukurlah saat di atas and bersabarlah saat di bawah."
          }
        ]
      },
      {
        title: "Ilmu & Belajar",
        content: "Pentingnya menuntut ilmu dan mengamalkannya.",
        learningActivity: "Diskusi Hikmah: Menganalisis kutipan mahfudzat tentang ilmu dan mempresentasikannya dalam bentuk poster digital.",
        dailyLife: "Mempraktekkan budaya membaca setiap hari sebagai perwujudan dari semangat menuntut ilmu.",
        subsections: [
          {
            title: "Al-Ilmu Bila 'Amalin",
            content: "العِلْمُ بِلَا عَمَلٍ كَالشَّجَرِ بِلَا ثَمَرٍ Meaning: Ilmu tanpa amal bagaikan pohon yang tidak berbuah.",
            explanation: "Ilmu yang kita miliki tidak akan bermanfaat jika tidak dipraktikkan dalam kehidupan sehari-hari."
          },
          {
            title: "Uthlubul 'Ilma minal Mahdi",
            content: "اُطْلُبِ العِلْمَ مِنَ المَهْدِ إِلَى اللَّحْدِ Meaning: Tuntutlah ilmu dari buaian hingga liang lahat.",
            explanation: "Belajar adalah proses seumur hidup. Tidak ada kata terlambat atau berhenti untuk mencari ilmu."
          },
          {
            title: "Baidhatul Yaumi Khairun",
            content: "بَيْضَةُ اليَوْمِ خَيْرٌ مِنْ دَجَاجَةِ الغَدِ Meaning: Telur hari ini lebih baik daripada ayam esok hari.",
            explanation: "Sesuatu yang kecil tapi pasti (ada sekarang) lebih baik daripada sesuatu yang besar tapi masih berupa janji atau angan-angan."
          },
          {
            title: "Aafatu al-'Ilmi an-Nisyanu",
            content: "آفَةُ العِلْمِ النِّسْيَانُ Meaning: Penyakit ilmu adalah lupa.",
            explanation: "Pentingnya mengulang-ulang pelajaran (muraja'ah) agar ilmu tetap melekat dalam ingatan."
          },
          {
            title: "Khairu Jaliisin fī az-Zamaani Kitaabun",
            content: "خَيْرُ جَلِيْسٍ فِي الزَّمَانِ كِتَابٌ Meaning: Sebaik-baik kawan duduk setiap waktu adalah buku.",
            explanation: "Membaca buku adalah cara terbaik untuk memperkaya wawasan tanpa dibatasi ruang and waktu."
          },
          {
            title: "At-Ta'allumu fī ash-Shighari",
            content: "التَّعَلُّمُ فِي الصِّغَرِ كَالنَّقْشِ عَلَى الحَجَرِ Meaning: Belajar di waktu kecil bagaikan mengukir di atas batu.",
            explanation: "Apa yang dipelajari di usia dini akan sangat kuat membekas and sulit dilupakan."
          },
          {
            title: "At-Ta'allumu fī al-Kibari",
            content: "التَّعَلُّمُ فِي الكِبَرِ كَالنَّقْشِ عَلَى المَاءِ Meaning: Belajar di waktu tua bagaikan mengukir di atas air.",
            explanation: "Meski sulit, belajar di masa tua tetaplah mulia, walau daya ingat mungkin tidak sekuat masa muda."
          },
          {
            title: "Laisa al-Yatiimu man Maata Abuhu",
            content: "لَيْسَ اليَتِيْمُ مَنْ مَاتَ أَبُوْهُ Meaning: Bukanlah yatim itu orang yang bapaknya meninggal dunia, tapi yatim itu yang tidak memiliki ilmu and adab.",
            explanation: "Kehilangan orang tua adalah duka, tapi kehilangan ilmu and adab adalah kerugian hakiki."
          },
          {
            title: "Al-’Ulamau Waratsatu al-Anbiya'i",
            content: "العُلَمَاءُ وَرَثَةُ الأَنْبِيَاءِ Meaning: Ulama adalah pewaris para nabi.",
            explanation: "Menghormati para ahli ilmu adalah bagian dari menghargai risalah yang dibawa para nabi."
          }
        ]
      },
      {
        title: "Adab & Akhlak",
        content: "Membentuk karakter yang mulia.",
        learningActivity: "Role Play Adab: Menampilkan drama pendek yang mengilustrasikan penerapan adab sesuai mahfudzat yang dipelajari.",
        dailyLife: "Menjaga lisan dan perilaku santun kepada orang yang lebih tua dan teman sebaya.",
        subsections: [
          {
            title: "Salamul Insan fi Hifzhil Lisan",
            content: "سَلَامَةُ الإِنْسَانِ فِي حِفْظِ اللِّسَانِ Meaning: Keselamatan manusia terletak pada penjagaan lisannya.",
            explanation: "Banyak masalah timbul karena ucapan. Menjaga lisan adalah cara terbaik untuk menjaga diri dan hubungan dengan orang lain."
          },
          {
            title: "Adabul Mar'i Khairun",
            content: "أَدَبُ المَرْءِ خَيْرٌ مِنْ ذَهَبِهِ Meaning: Adab seseorang lebih baik daripada emasnya (kekayaannya).",
            explanation: "Kemuliaan seseorang tidak diukur dari hartanya, melainkan dari budi pekerti dan kesopanannya."
          },
          {
            title: "Laula Al-Adabu Lakanannasu",
            content: "لَوْلَا الأَدَبُ لَكَانَ النَّاسُ كَالبَهَائِمِ Meaning: Jika bukan karena adab, niscaya manusia itu seperti binatang.",
            explanation: "Adab yang membedakan manusia dengan makhluk lainnya. Tanpa moralitas, manusia akan kehilangan kemanusiaannya."
          },
          {
            title: "Syarrafu al-Mar'i bi al-Adabi",
            content: "شَرَفُ المَرْءِ بِالأَدَبِ لَا بِالنَّسَبِ Meaning: Kemuliaan seseorang itu dengan adabnya, bukan dengan nasabnya (keturunan).",
            explanation: "Kualitas diri seseorang diukur dari perilakunya, bukan dari siapa orang tuanya atau sukunya."
          },
          {
            title: "Innama al-Umamu al-Akhlaqu Ma Baqiyat",
            content: "إِنَّمَا الأُمَمُ الأَخْلَاقُ مَا بَقِيَتْ Meaning: Sesungguhnya kejayaan suatu bangsa terletak pada akhlaknya selama akhlak itu masih ada.",
            explanation: "Bangsa yang besar adalah bangsa yang menjunjung tinggi nilai-nilai moral and etika."
          },
          {
            title: "Man Qalla Chidquhu Qalla Shodiiquhu",
            content: "مَنْ قَلَّ صِدْقُهُ قَلَّ صَدِيْقُهُ Meaning: Barangsiapa yang sedikit kejujurannya, maka sedikit pula temannya.",
            explanation: "Kejujuran adalah pondasi kepercayaan dalam setiap hubungan pertemanan."
          },
          {
            title: "Al-Ittihaadu Asasu an-Najaahi",
            content: "الاِتِّحَادُ أَسَاسُ النَّجَاحِ Meaning: Persatuan adalah pangkal keberhasilan.",
            explanation: "Kesuksesan besar hanya bisa diraih melalui kerja sama and kesolidan dalam komunitas."
          },
          {
            title: "Man Hafizha Lisanahu Salima",
            content: "مَنْ حَفِظَ لِسَانَهُ سَلِمَ Meaning: Barangsiapa menjaga lidahnya niscaya ia selamat.",
            explanation: "Hati-hatilah dalam berucap karena lidah tak bertulang bisa melukai lebih dalam dari pedang."
          },
          {
            title: "Laa Tahtaqir man Duunaka",
            content: "لَا تَحْتَقِرْ مَنْ دُوْنَكَ فَلِكُلِّ شَيْءٍ مَزِيَّةٌ Meaning: Jangan menghina orang yang lebih rendah darimu, karena setiap sesuatu itu memiliki kelebihan.",
            explanation: "Rendah hati and hargailah setiap orang tanpa memandang status sosial atau fisik."
          }
        ]
      },
      {
        title: "Persahabatan & Sosial",
        content: "Membangun hubungan yang baik dengan sesama.",
        learningActivity: "Analisis Jaringan Sosial: Mengidentifikasi kriteria teman yang baik menurut mahfudzat dan mendiskusikan cara menjaga persahabatan.",
        dailyLife: "Menjadi teman yang suportif dan selalu mengajak kepada kebaikan dalam pergaulan sehari-hari.",
        subsections: [
          {
            title: "Ikhbarit Tibqa Ash-Shadiqi",
            content: "اخْتَبِرْ صَدِيْقَكَ قَبْلَ أَنْ تَعْتَمِدَ عَلَيْهِ Meaning: Ujilah temanmu sebelum kamu mempercayainya.",
            explanation: "Kepercayaan adalah hal yang mahal. Kita perlu mengenal seseorang dengan baik sebelum benar-benar mengandalkannya."
          },
          {
            title: "Man 'Arafa Bu'das Safari",
            content: "مَنْ عَرَفَ بُعْدَ السَّفَرِ اسْتَعَدَّ Meaning: Barang siapa tahu jauhnya perjalanan, bersiap-siaplah ia.",
            explanation: "Persiapan adalah kunci keberhasilan. Menyadari tantangan di depan membuat kita lebih waspada dan siap."
          },
          {
            title: "Khairul Ashhabi man Yadulluka",
            content: "خَيْرُ الأَصْحَابِ مَنْ يَدُلُّكَ عَلَى الخَيْرِ Meaning: Sebaik-baik teman adalah yang menunjukkanmu kepada kebaikan.",
            explanation: "Carilah teman yang selalu memotivasi dan membimbing kita menuju jalan yang benar."
          },
          {
            title: "Idza Shadaqa al-'Azmu",
            content: "إِذَا صَدَقَ العَزْمُ وَضَحَ السَّبِيْلُ Meaning: Jika benar kemauannya, niscaya terbukalah jalannya.",
            explanation: "Tekad yang kuat akan membantu kita menemukan jalan keluar dari setiap kesulitan."
          },
          {
            title: "Man laa Yarham laa Yurham",
            content: "مَنْ لَا يَرْحَمْ لَا يُرْحَمْ Meaning: Barangsiapa tidak menyayangi niscaya tidak disayangi.",
            explanation: "Kasih sayang adalah sifat yang harus dimiliki setiap manusia agar mendapatkan rahmat dari Allah and sesama."
          },
          {
            title: "Khairu an-Naasi Anfauhum li an-Naasi",
            content: "خَيْرُ النَّاسِ أَنْفَعُهُمْ لِلنَّاسِ Meaning: Sebaik-baik manusia adalah yang paling bermanfaat bagi orang lain.",
            explanation: "Tujuan hidup yang mulia adalah menjadi solusi and pemberi manfaat bagi lingkungan sekitar."
          },
          {
            title: "Man laa Yadhuqu Dzulla at-Ta'allumi",
            content: "مَنْ لَا يَذُقْ ذُلَّ التَّعَلُّمِ سَاعَةً Meaning: Barangsiapa tidak merasakan pahitnya belajar sesaat, ia akan merasakan hinanya kebodohan sepanjang hayat.",
            explanation: "Pengorbanan dalam belajar adalah investasi untuk masa depan yang bermartabat."
          },
          {
            title: "As-Shabru yu'inu 'ala kulli 'amalin",
            content: "الصَّبْرُ يُعِيْنُ عَلَى كُلِّ عَمَلٍ Meaning: Kesabaran itu membantu penuntasan setiap pekerjaan.",
            explanation: "Tanpa kesabaran, pekerjaan sulit akan terasa mustahil and pekerjaan mudah akan terasa membosankan."
          },
          {
            title: "Lan Tarji'a al-Ayyaamu",
            content: "لَنْ تَرْجِعَ الأَيَّامُ الَّتِي مَضَتْ Meaning: Tidak akan pernah kembali hari-hari yang telah berlalu.",
            explanation: "Hargailah setiap detik yang kita miliki karena ia adalah aset yang paling tidak bisa diperbarui."
          }
        ]
      },
      {
        title: "Sabar & Tawakal",
        content: "Nasihat tentang keteguhan hati and kepasrahan kepada Allah.",
        learningActivity: "Refleksi Diri: Menuliskan jurnal tentang pengalaman pribadi dalam bersabar menghadapi tantangan sesuai tuntunan mahfudzat.",
        dailyLife: "Menghadapi kesulitan dengan tenang dan senantiasa bertawakal kepada Allah dalam setiap hasil usaha.",
        subsections: [
          {
            title: "As-Shabru ka ash-Shobbiri",
            content: "الصَّبْرُ كَالصَّبِرِ مُرٌّ فِي مَذَاقَتِهِ Meaning: Kesabaran itu seperti empedu, pahit rasanya, tapi hasilnya lebih manis dari madu.",
            explanation: "Menjalani kesabaran memang berat, namun buah dari kesabaran tersebut sangatlah indah."
          },
          {
            title: "Idza Tamma al-'Aqlu Qalla al-Kalamu",
            content: "إِذَا تَمَّ العَقْلُ قَلَّ الكَلَامُ Meaning: Apabila akal telah sempurna, niscaya sedikitlah bicara.",
            explanation: "Orang yang bijak lebih banyak berpikir and merenung daripada sekadar bicara tanpa arah."
          },
          {
            title: "Al-Qana'atu Kanzun Laa Yafna",
            content: "القَنَاعَةُ كَنْزٌ لَا يَفْنَى Meaning: Sifat merasa cukup (qana’ah) adalah simpanan yang tidak akan habis.",
            explanation: "Kebahagiaan sejati datang dari hati yang selalu merasa cukup dengan pemberian Allah."
          },
          {
            title: "I'mash-Shighara Tashur-ul Kibara",
            content: "اعْصِ الصِّغَارَ تَصُرِ الكِبَارَ Meaning: Lawanlah hawa nafsu yang kecil, niscaya kamu akan mampu mengendalikan yang besar.",
            explanation: "Disiplin diri dimulai dari hal-hal kecil untuk membangun karakter yang kuat."
          },
          {
            title: "Al-Haqqu Bila Nizham",
            content: "الحَقُّ بِلَا نِظَامٍ يَغْلِبُهُ البَاطِلُ بِنِظَامٍ Meaning: Kebenaran yang tidak terorganisir akan dikalahkan oleh kebatilan yang terorganisir.",
            explanation: "Pentingnya manajemen and kesolidan dalam memperjuangkan nilai-nilai kebaikan."
          },
          {
            title: "Ad-Dunuwwu minal Khairi yajlibu al-Khaira",
            content: "الدُّنُوُّ مِنَ الخَيْرِ يَجْلِبُ الخَيْرَ Meaning: Mendekat kepada kebaikan akan membawa kebaikan.",
            explanation: "Lingkungan and pergaulan yang positif akan mempengaruhi diri kita menjadi lebih baik."
          },
          {
            title: "Al-Istiqomatu Khairun min al-Alfi Karomatin",
            content: "الاِسْتِقَامَةُ خَيْرٌ مِنْ أَلْفِ كَرَامَةٍ Meaning: Istiqomah (konsistensi) itu lebih baik daripada seribu karomah.",
            explanation: "Kualitas seseorang dilihat dari keteguhannya dalam melakukan kebaikan secara rutin."
          },
          {
            title: "Man 'Arafa Nafsahu 'Arafa Rabbahu",
            content: "مَنْ عَرَفَ نَفْسَهُ عَرَفَ رَبَّهُ Meaning: Barangsiapa mengenal dirinya, niscaya ia mengenal Tuhannya.",
            explanation: "Mengenali keterbatasan diri akan menuntun kita pada kesadaran akan kebesaran Sang Pencipta."
          },
          {
            title: "Ash-Shidqu munjin wa al-Kadzibu muhlikun",
            content: "الصِّدْقُ مُنْجٍ وَالكَذِبُ مُهْلِكٌ Meaning: Kejujuran itu menyelamatkan and kedustaan itu membinasakan.",
            explanation: "Meski pahit, kejujuran membawa ketenangan, sementara dusta hanya akan menumpuk masalah."
          },
          {
            title: "Al-Ajalu Aafatu al-'Amali",
            content: "العَجَلُ آفَةُ العَمَلِ Meaning: Tergesa-gesa itu perusak pekerjaan.",
            explanation: "Lakukan segala sesuatu dengan tenang and terencana agar hasilnya maksimal."
          },
          {
            title: "Ar-Rifqu bi al-Hayawani min al-Imani",
            content: "الرِّفْقُ بِالحَيَوَانِ مِنَ الإِيْمَانِ Meaning: Berbuat baik kepada hewan adalah bagian dari iman.",
            explanation: "Kasih sayang Islam meliputi seluruh makhluk ciptaan Allah."
          }
        ]
      },
      {
        title: "Kejujuran & Kebenaran",
        content: "Nilai moral tentang integritas diri.",
        learningActivity: "Studi Kasus Integritas: Menganalisis dampak dari kejujuran dan kebohongan dalam berbagai situasi kehidupan melalui diskusi kelompok.",
        dailyLife: "Berani berkata jujur meskipun itu sulit dan tetap memegang teguh nilai kebenaran.",
        subsections: [
          {
            title: "Qul al-Haqqa walau Kana Murran",
            content: "قُلِ الحَقَّ وَلَوْ كَانَ مُرًّا Meaning: Katakanlah kebenaran itu walau terasa pahit.",
            explanation: "Integritas menuntut kita untuk tetap pada kebenaran meski berisiko tinggi."
          },
          {
            title: "Afat-ul Insaani fi al-Lisaani",
            content: "آفَةُ الإِنْسَانِ فِي اللِّسَانِ Meaning: Bencana manusia itu terdapat pada lidahnya.",
            explanation: "Banyak penyesalan bermula dari kata-kata yang tidak dipikirkan matang-matang."
          },
          {
            title: "Laa Takun Rathban fatu'shara",
            content: "لَا تَكُنْ رَطْبًا فَتُعْصَرَ وَلَا يَابِسًا فَتُكْسَرَ Meaning: Janganlah kamu terlalu lemah sehingga mudah diperas, and jangan terlalu keras sehingga mudah dipatahkan.",
            explanation: "Pentingnya keseimbangan and fleksibilitas dalam menghadapi berbagai situasi hidup."
          },
          {
            title: "Khairul 'Umuuri Ausatuha",
            content: "خَيْرُ الأُمُوْرِ أَوْسَطُهَا Meaning: Sebaik-baik perkara adalah yang di tengah-tengah (moderat).",
            explanation: "Islam menganjurkan sikap pertengahan dalam segala hal, menghindari ekstrimisme."
          },
          {
            title: "Likulli Maqomin Maqolun",
            content: "لِكُلِّ مَقَامٍ مَقَالٌ وَلِكُلِّ مَقَالٍ مَقَامٌ Meaning: Setiap tempat ada perkataannya, and setiap perkataan ada tempatnya.",
            explanation: "Berbicaralah sesuai konteks, situasi, and audience agar pesan tersampaikan dengan baik."
          },
          {
            title: "Innama al-Mar'u bi Ashgharaihi",
            content: "إِنَّمَا المَرْءُ بِأَصْغَرَيْهِ قَلْبِهِ وَلِسَانِهِ Meaning: Seseorang itu dinilai dari dua organ terkecilnya: hati and lidahnya.",
            explanation: "Kesucian hati and kebenaran lisan adalah penentu kemuliaan seseorang."
          },
          {
            title: "Al-Kalamu Yanfudzu ma laa tanfudzuhu al-Ibaratu",
            content: "الكَلَامُ يَنْفُذُ مَا لَا تَنْفُذُهُ الإِبْرَةُ Meaning: Kata-kata dapat menembus apa yang tidak bisa ditembus oleh jarum.",
            explanation: "Kekuatan diplomasi and komunikasi seringkali lebih efektif daripada kekuatan fisik."
          },
          {
            title: "Man 'Adzuba Lisanuhu Katsura Ichwanuhu",
            content: "مَنْ عَذُبَ لِسَانُهُ كَثُرَ إِخْوَانُهُ Meaning: Barangsiapa manis tutur katanya, niscaya banyak temannya.",
            explanation: "Ramah tamah and kata-kata yang baik adalah magnet sosial yang kuat."
          },
          {
            title: "Lan Tarji'al Ayyaamu llati Madhat",
            content: "لَنْ تَرْجِعَ الأَيَّامُ الَّتِي مَضَتْ Meaning: Hari-hari yang telah berlalu tidak akan pernah kembali.",
            explanation: "Gunakan kesempatan yang ada sekarang sebelum ia menjadi kenangan and penyesalan."
          },
          {
            title: "Al-Ghibatu Ashaddu minal Qatli",
            content: "الغِيْبَةُ أَشَدُّ مِنَ القَتْلِ Meaning: Mengumpat (ghibah) itu lebih kejam daripada pembunuhan.",
            explanation: "Membicarakan keburukan orang lain merusak kehormatan yang dosanya sangat berat."
          },
          {
            title: "Al-Hayaa'u minal Iiman",
            content: "الحَيَاءُ مِنَ الإِيْمَانِ Meaning: Malu adalah sebagian dari iman.",
            explanation: "Rasa malu mencegah seseorang dari perbuatan yang merendahkan martabat."
          }
        ]
      },
      {
        title: "Waktu & Kesempatan",
        content: "Nasihat tentang efisiensi hidup.",
        learningActivity: "Audit Waktu: Siswa mencatat penggunaan waktu mereka selama sehari dan mendiskusikan cara mengalokasikan waktu lebih baik berdasarkan mahfudzat.",
        dailyLife: "Disiplin dalam membagi waktu antara belajar, beribadah, dan membantu orang tua.",
        subsections: [
          {
            title: "Anta fi Waqtika",
            content: "أَنْتَ فِي وَقْتِكَ كَالسَّيْفِ إِنْ لَمْ تَقْطَعْهُ قَطَعَكَ Meaning: Waktumu seperti pedang, jika kau tidak memotongnya maka ia yang akan memotongmu.",
            explanation: "Waktu akan terus berjalan and menghancurkanmu jika kau tidak memanfaatkannya dengan bijak."
          },
          {
            title: "Fakkir qabla an Ta'zima",
            content: "فَكِّرْ قَبْلَ أَنْ تَعْزِمَ Meaning: Berpikirlah sebelum kamu bertekad (melangkah).",
            explanation: "Analisis and pertimbangan yang matang adalah langkah awal menuju kesuksesan."
          },
          {
            title: "Al-Barokatu fī al-Bukuuri",
            content: "البَرَكَةُ فِي البُكُوْرِ Meaning: Berkah itu ada pada pagi hari.",
            explanation: "Memulai aktivitas lebih awal membawa produktivitas and energi yang lebih besar."
          },
          {
            title: "Laa Tu'ajjil 'Amal al-Yaumi",
            content: "لَا تُؤَجِّلْ عَمَلَ اليَوْمِ إِلَى الغَدِ Meaning: Jangan menunda pekerjaan hari ini sampai besok.",
            explanation: "Menunda-nunda adalah pencuri waktu yang akan menumpuk beban di masa depan."
          },
          {
            title: "Al-Khairu fiman ikhtaarohu Allahu",
            content: "الخَيْرُ فِيمَا اخْتَارَهُ اللَّهُ Meaning: Kebaikan itu ada pada apa yang telah dipilihkan Allah.",
            explanation: "Ridho terhadap takdir membawa ketenangan jiwa and keyakinan akan hikmah di balik peristiwa."
          },
          {
            title: "Ma faza man kasila",
            content: "مَا فَازَ مَنْ كَسِلَ Meaning: Tidak akan menang orang yang malas.",
            explanation: "Kemalasan adalah penghalang utama bagi setiap cita-cita untuk menjadi nyata."
          },
          {
            title: "Inna al-Chayā-a Minal Iiman",
            content: "إِنَّ الحَيَاءَ مِنَ الإِيْمَانِ Meaning: Sesungguhnya rasa malu itu bagian dari iman.",
            explanation: "Malu berbuat maksiat adalah tanda sehatnya keimanan seseorang."
          },
          {
            title: "Likulli Syai-in Maziyyah",
            content: "لِكُلِّ شَيْءٍ مَزِيَّةٌ Meaning: Segala sesuatu itu memiliki kelebihannya masing-masing.",
            explanation: "Jangan merasa rendah diri karena Allah menciptakan setiap makhluk dengan potensi unik."
          },
          {
            title: "Ash-Shihhatu Taajun",
            content: "الصِّحَّةُ تَاجٌ عَلَى رُؤُوْسِ الأَصِحَّاءِ Meaning: Kesehatan adalah mahkota di atas kepala orang sehat yang hanya bisa dilihat oleh orang sakit.",
            explanation: "Hargailah nikmat sehat sebelum ia dicabut and kau baru menyadari betapa berharganya itu."
          },
          {
            title: "Al-Qalb-ul Qawī",
            content: "القَلْبُ القَوِيُّ يَغْلِبُ الظُّرُوْفَ Meaning: Hati yang kuat akan mengalahkan segala keadaan.",
            explanation: "Mentalitas and keteguhan batin adalah kunci untuk bertahan di tengah badai kehidupan."
          },
          {
            title: "Man Sa'a 'Ala al-Ardi",
            content: "مَنْ سَعَى عَلَى الأَرْضِ نَال مَا تَمَنَّى Meaning: Barangsiapa yang berusaha di muka bumi, ia akan mendapatkan apa yang ia cita-citakan.",
            explanation: "Dunia memberikan hasil kepada mereka yang aktif and pantang menyerah dalam ikhtiar."
          }
        ]
      },
      {
        title: "Bicara & Rahasia",
        content: "Nasihat tentang komunikasi and privasi.",
        learningActivity: "Simulasi Komunikasi: Latihan menyampaikan pesan dengan ringkas dan menjaga rahasia teman dalam berbagai skenario.",
        dailyLife: "Menjadi pendengar yang baik dan tidak menyebarkan berita yang belum tentu kebenarannya.",
        subsections: [
          {
            title: "Istaghnuu bi al-Kitmani",
            content: "اِسْتَعِيْنُوْا عَلَى المَطَالِبِ بِالكِتْمَانِ Meaning: Bantulah hajat-hajatmu dengan menyimpannya (rahasia).",
            explanation: "Tidak semua rencana harus diumumkan; menjaga privasi seringkali membantu kelancaran urusan."
          },
          {
            title: "Al-'Ibrahtu bi al-Chotimah",
            content: "العِبْرَةُ بِالخَاتِمَةِ Meaning: Nilai sesuatu itu bergantung pada akhirnya.",
            explanation: "Jangan cepat puas atau berputus asa; yang terpenting adalah bagaimana kita mengakhiri perjalanan."
          },
          {
            title: "Laa Tahtaqir ash-Shaghiro",
            content: "لَا تَحْتَقِرِ الصَّغِيْرَ فَعَسَى أَنْ يَكُوْنَ كَبِيْرًا Meaning: Jangan menganggap remeh hal kecil, karena bisa jadi ia akan menjadi besar.",
            explanation: "Setiap langkah kecil adalah batu bata yang membangun istana kesuksesan."
          },
          {
            title: "Hubbu al-Wathon minal Iiman",
            content: "حُبُّ الوَطَنِ مِنَ الإِيْمَانِ Meaning: Mencintai tanah air adalah bagian dari iman.",
            explanation: "Seorang mukmin yang baik pasti memiliki rasa tanggung jawab and kasih sayang terhadap negerinya."
          },
          {
            title: "At-Taubatu Tajubbu ma Qoblaha",
            content: "التَّوْبَةُ تَجُبُّ مَا قَبْلَهَا Meaning: Taubat itu menghapus dosa-dosa sebelumnya.",
            explanation: "Selalu ada kesempatan untuk memulai lembaran baru yang lebih bersih and suci."
          },
          {
            title: "Khairul kalaami ma Qalla wa Dalla",
            content: "خَيْرُ الكَلَامِ مَا قَلَّ وَدَلَّ Meaning: Sebaik-baik perkataan adalah yang singkat and padat maknanya.",
            explanation: "Efektivitas bicara lebih penting daripada panjang lebarnya kata-kata."
          },
          {
            title: "Likulli Thaa-iqin Maalun",
            content: "لِكُلِّ طَائِقٍ مَالٌ Meaning: Setiap yang naik pasti akan turun.",
            explanation: "Kekuasaan and kesuksesan dunia bersifat sementara, jangan pernah menyombongkan diri."
          },
          {
            title: "Al-Insaanu Mahallul Khotho' wa an-Nisyan",
            content: "الإِنْسَانُ مَحَلُّ الخَطَأِ وَالنِّسْيَانِ Meaning: Manusia adalah tempatnya salah and lupa.",
            explanation: "Tanda kedewasaan adalah mengakui kesalahan and terus berupaya memperbaikinya."
          },
          {
            title: "Ad-Dunia Mazro'atul Akhirot",
            content: "الدُّنْيَا مَزْرَعَةُ الآخِرَةِ Meaning: Dunia ini adalah ladang untuk akhirat.",
            explanation: "Apa yang kita tanam di dunia ini akan kita tuai hasilnya di akhirat kelak."
          },
          {
            title: "Man dzhallama dzhullima",
            content: "مَنْ ظَلَمَ ظُلِمَ Meaning: Barangsiapa menzalimi niscaya akan dimalimi.",
            explanation: "Hukum tabur tuai berlaku mutlak; kejahatan akan kembali kepada pelakunya."
          },
          {
            title: "Al-Qona'atu Asasu at-Taufiq",
            content: "القَنَاعَةُ أَسَاسُ التَّوْفِيْقِ Meaning: Sifat merasa cukup adalah pangkal keberuntungan.",
            explanation: "Hati yang merasa cukup akan selalu merasa tenang and mendapatkan hidayah Allah."
          }
        ]
      },
      {
        title: "Amal & Keberhasilan",
        content: "Etos kerja Islami.",
        learningActivity: "Proyek Kebaikan: Merancang sebuah kegiatan amal kecil dan melaksanakannya sebagai bentuk kerja nyata dari nilai mahfudzat.",
        dailyLife: "Bekerja dengan sungguh-sungguh dan menjaga kebersihan lingkungan di setiap tempat.",
        subsections: [
          {
            title: "Man Jadda Wajada (Repeat)",
            content: "مَنْ جَدَّ وَجَدَ Meaning: Siapa bersungguh-sungguh, ia akan berhasil.",
            explanation: "Kunci utama kesuksesan adalah totalitas dalam ikhtiar."
          },
          {
            title: "Al-Yadu al-'Ulya Khairun",
            content: "اليَدُ العُلْيَا خَيْرٌ مِنَ اليَدِ السُّفْلَى Meaning: Tangan di atas lebih baik daripada tangan di bawah.",
            explanation: "Jadilah pemberi and pembantu, bukan sekadar penerima and peminta-minta."
          },
          {
            title: "An-Nazhofatu minal Iiman",
            content: "النَّظَافَةُ مِنَ الإِيْمَانِ Meaning: Kebersihan adalah bagian dari iman.",
            explanation: "Seorang muslim harus menjaga kebersihan lahiriah (fisik) and batiniah (hati)."
          },
          {
            title: "Al-Imtiyaazu bi al-Amali",
            content: "الاِمْتِيَازُ بِالعَمَلِ لَا بِالقَوْلِ Meaning: Keunggulan itu dengan perbuatan, bukan dengan perkataan.",
            explanation: "Buktikan kualitas dirimu lewat karya nyata, bukan sekadar janji muluk."
          },
          {
            title: "Fakkir qobla an Taqshida",
            content: "فَكِّرْ قَبْلَ أَنْ تَقْصِدَ Meaning: Berpikirlah sebelum kamu melangkah (menuju tujuan).",
            explanation: "Strategi yang matang menghindarkan kita dari kegagalan and kerugian yang tidak perlu."
          },
          {
            title: "Al-Waqtu Atsmanu",
            content: "الوَقْتُ أَثْمَنُ مِنَ الذَّهَبِ Meaning: Waktu itu lebih mahal daripada emas.",
            explanation: "Emas bisa diganti, waktu yang hilang tidak akan pernah kembali."
          },
          {
            title: "At-Ta'awunu miftahu an-Najahi",
            content: "التَّعَاوُنُ مِفْتَاحُ النَّجَاحِ Meaning: Kerjasama adalah kunci keberhasilan.",
            explanation: "Beban yang dipikul bersama akan terasa ringan and tujuan besar akan lebih cepat tercapai."
          },
          {
            title: "Man Khothoba al-Ma'ali",
            content: "مَنْ خَطَبَ المَعَالِي سَهِرَ اللَّيَالِي Meaning: Barangsiapa mengharapkan kemuliaan, hendaklah ia rela berjaga di waktu malam (belajar/ibadah).",
            explanation: "Kesuksesan menuntut pengorbanan waktu istirahat and kenyamanan diri."
          },
          {
            title: "Laisa al-'Aibu fiman Kaana Faqiiron",
            content: "لَيْسَ العَيْبُ فِيمَنْ كَانَ فَقِيْرًا Meaning: Bukanlah aib orang yang miskin, tapi aib itu adalah orang yang bodoh and malas.",
            explanation: "Kemiskinan harta bisa diubah, tapi kemiskinan mental and ilmu adalah kehinaan sejati."
          },
          {
            title: "Al-Ilmu Nurun",
            content: "العِلْمُ نُوْرٌ Meaning: Ilmu adalah cahaya.",
            explanation: "Ilmu menuntun manusia keluar dari kegelapan kebodohan menuju terang benderang kebenaran."
          },
          {
            title: "Idza Shadaqa al-Amalu",
            content: "إِذَا صَدَقَ العَمَلُ نَجَحَ الأملُ Meaning: Jika perbuatan itu benar, niscaya cita-cita akan tercapai.",
            explanation: "Lakukan segala sesuatu dengan cara yang benar and jujur agar impianmu terwujud."
          }
        ]
      },
      {
        title: "Kebijaksanaan Hidup",
        content: "Renungan tentang eksistensi diri.",
        learningActivity: "Menulis Esai Reflektif: Membuat tulisan tentang makna hidup dan tujuan akhirat berdasarkan kumpulan mahfudzat kebijaksanaan.",
        dailyLife: "Selalu mengevaluasi diri (muhasabah) setiap malam sebelum tidur untuk memperbaiki kualitas hidup besok.",
        subsections: [
          {
            title: "Ad-Dunia Sijnul Mu'min",
            content: "الدُّنْيَا سِجْنُ المُؤْمِنِ وَجَنَّةُ الكَافِرِ Meaning: Dunia ini adalah penjara bagi orang mukmin and surga bagi orang kafir.",
            explanation: "Dunia penuh dengan aturan and ujian bagi mukmin, sementara puncaknya adalah di akhirat kelak."
          },
          {
            title: "Khairul Ashhab",
            content: "خَيْرُ الأَصْحَابِ مَنْ يَدُلُّكَ عَلَى الخَيْرِ Meaning: Sebaik-baik teman adalah yang membimbingmu ke jalan kebaikan.",
            explanation: "Teman sejati adalah mereka yang mempedulikan keselamatan akhiratmu."
          },
          {
            title: "Al-Kalamu Yanfudzu",
            content: "الكَلَامُ يَنْفُذُ مَا لَا تَنْفُذُهُ الإِبْرَةُ Meaning: Kata-kata dapat menembus hati yang tidak bisa ditembus oleh jarum.",
            explanation: "Gunakan lisanmu untuk mengobati and memberi semangat, bukan untuk menyakiti."
          },
          {
            title: "Likulli Syai-in Miftah",
            content: "لِكُلِّ شَيْءٍ مِفْتَاحٌ وَمِفْتَاحُ الجَنَّةِ الصَّلَاةُ Meaning: Setiap sesuatu ada kuncinya, and kunci surga adalah shalat.",
            explanation: "Jaga hubunganmu dengan Allah jika kau ingin mendapatkan kunci kebahagiaan abadi."
          },
          {
            title: "Al-Hayaa'u min al-Iman",
            content: "الحَيَاءُ مِنَ الإِيْمَانِ Meaning: Malu itu sebagian dari iman.",
            explanation: "Rasa malu menjaga integritas moral seseorang dalam berinteraksi."
          },
          {
            title: "I'mas-shighara",
            content: "اعْصِ الشِّغَارَ تَصُرِ الكِبَارَ Meaning: Lawan nafsu kecilmu, kau akan jadi besar.",
            explanation: "Kemenangan sejati adalah kemenangan melawan diri sendiri."
          },
          {
            title: "Syarrafu al-Mar'i",
            content: "شَرَفُ المَرْءِ بِأَدَبِهِ Meaning: Kemuliaan seseorang ada pada adabnya.",
            explanation: "Harta bisa hilang, tapi adab yang baik akan terus dikenang and dihormati."
          },
          {
            title: "Al-Qona'atu Kanzun",
            content: "القَنَاعَةُ كَنْزٌ لَا يَفْنَى Meaning: Sifat qana’ah adalah kekayaan yang takkan habis.",
            explanation: "Merasa cukup adalah rahasia kekayaan hati yang sesungguhnya."
          },
          {
            title: "Man lam Yadhuq",
            content: "مَنْ لَمْ يَذُقْ مُرَّ التَّعَلُّمِ Meaning: Siapa yang tak rasa pahit belajar, akan rasa hina bodoh.",
            explanation: "Jangan mengeluh saat belajar, karena bodoh itu jauh lebih menyakitkan."
          },
          {
            title: "Lan Tarji'al Ayyaamu",
            content: "لَنْ تَرْجِعَ الأَيَّامُ Meaning: Hari-hari takkan kembali.",
            explanation: "Manfaatkan setiap kesempatan yang datang dalam hidupmu."
          },
          {
            title: "Khairun Naasi Anfauhum",
            content: "خَيْرُ النَّاسِ أَنْفَعُهُمْ لِلنَّاسِ Meaning: Sebaik-baik manusia adalah yang paling bermanfaat.",
            explanation: "Jadikan hidupmu sebagai rahmat bagi semesta alam."
          },
          {
            title: "Al-Ummu Madrasatun",
            content: "الأُمُّ مَدْرَسَةٌ إِذَا أَعْدَدْتَهَا أَعْدَدْتَ شَعْبًا طَيِّبَ الأَعْرَاقِ Meaning: Ibu adalah sekolah pertama, jika engkau mempersiapkannya dengan baik, maka engkau mempersiapkan bangsa yang berkarakter mulia.",
            explanation: "Peran ibu sangat vital dalam membentuk generasi masa depan yang berkualitas."
          }
        ]
      }
    ]
  },
  {
    id: "arbain-1",
    title: "Hadits Arba'in Nawawi",
    category: ModuleCategory.ARBAIN,
    summary: "42 Hadits pilihan Imam Nawawi yang mencakup inti ajaran Islam.",
    sections: [
      {
        title: "Inti Niat & Amal",
        content: "Hadits-hadits pembuka yang menjelaskan pondasi setiap perbuatan.",
        learningActivity: "Tahfidz & Analisis: Menghafal 42 hadits secara bertahap dan membedah kandungan hukum serta hikmah setiap hadits dalam diskusi kelompok.",
        dailyLife: "Mempraktekkan satu hadits setiap hari secara bergantian, dimulai dari hadits tentang niat dalam segala aktivitas.",
        subsections: [
          {
            title: "Hadits 1: Niat",
            content: "إِنَّمَا الأَعْمَالُ بِالنِّيَّاتِ وَإِنَّمَا لِكُلِّ امْرِئٍ مَا نَوَى Meaning: Sesungguhnya setiap perbuatan tergantung niatnya, dan setiap orang akan mendapatkan sesuai dengan apa yang ia niatkan.",
            explanation: "Hadits ini mengajarkan bahwa nilai suatu ibadah di sisi Allah sangat bergantung pada keikhlasan hati pelakunya."
          },
          {
            title: "Hadits 2: Iman, Islam & Ihsan",
            content: "فَأَخْبِرْنِي عَنِ الْإِيمَانِ قَالَ أَنْ تُؤْمِنَ بِاللَّهِ وَمَلَائِكَتِهِ وَكُتُبِهِ وَرُسُلِهِ وَالْيَوْمِ الْآخِرِ Meaning: Kabarkanlah kepadaku tentang Iman. Beliau bersabda: Engkau beriman kepada Allah, Malaikat-Nya, Kitab-Nya, Rasul-Nya, Hari Akhir...",
            explanation: "Hadits Jibril yang sangat populer ini merangkum seluruh rukun agama Islam dalam satu percakapan."
          },
          {
            title: "Hadits 3: Rukun Islam",
            content: "بُنِيَ الإِسْلَامُ عَلَى خَمْسٍ: شَهَادَةِ أَنْ لَا إِلَهَ إِلَّا اللهُ وَأَنَّ مُحَمَّدًا رَسُولُ اللهِ... Meaning: Islam dibangun di atas lima perkara: Syahadat, Shalat, Zakat, Haji, dan Puasa Ramadhan.",
            explanation: "Pondasi utama agama Islam yang harus ditegakkan oleh setiap muslim."
          },
          {
            title: "Hadits 4: Kejadian Manusia",
            content: "إِنَّ أَحَدَكُمْ يُجْمَعُ خَلْقُهُ فِي بَطْنِ أُمِّهِ أَرْبَعِينَ يَوْمًا... Meaning: Sesungguhnya setiap kalian dikumpulkan penciptaannya dalam rahim ibunya selama 40 hari (nuthfah)...",
            explanation: "Proses penciptaan manusia dan penentuan takdir (rezeki, ajal, amal) sejak dalam kandungan."
          }
        ]
      },
      {
        title: "Ibadah & Larangan",
        content: "Prinsip dalam menjalankan syariat.",
        learningActivity: "Klasifikasi Hukum: Siswa mengelompokkan hadits-hadits tentang perintah dan larangan serta mendiskusikan dampaknya dalam masyarakat.",
        dailyLife: "Senantiasa berhati-hati dalam bertindak, memastikan apakah perbuatan tersebut sesuai syariat atau tidak.",
        subsections: [
          {
            title: "Hadits 5: Bid'ah",
            content: "مَنْ أَحْدَثَ فِي أَمْرِنَا هَذَا مَا لَيْسَ فِيهِ فَهُوَ رَدٌّ Meaning: Barangsiapa yang mengada-adakan dalam urusan (agama) kami ini apa yang bukan darinya, maka ia tertolak.",
            explanation: "Larangan menambah-nambah ajaran agama tanpa dasar dari dalil yang sah."
          },
          {
            title: "Hadits 6: Halal & Haram",
            content: "إِنَّ الْحَلَالَ بَيِّنٌ وَإِنَّ الْحَرَامَ بَيِّنٌ وَبَيْنَهُمَا مُشْتَبِهَاتٌ Meaning: Sesungguhnya yang halal itu jelas dan yang haram itu jelas, dan di antara keduanya terdapat perkara syubhat.",
            explanation: "Pentingnya menjaga diri dari perkara yang tidak jelas status hukumnya demi menjaga agama dan kehormatan."
          },
          {
            title: "Hadits 7: Agama adalah Nasihat",
            content: "الدِّينُ النَّصِيحَةُ قُلْنَا لِمَنْ؟ قَالَ لِلَّهِ وَلِكِتَابِهِ وَلِرَسُولِهِ وَلِأَئِمَّةِ الْمُسْلِمِينَ وَعَامَّتِهِمْ Meaning: Agama adalah nasihat. Kami bertanya: Untuk siapa? Beliau menjawab: Untuk Allah, Kitab-Nya, Rasul-Nya, Pemimpin Muslim, dan rakyat umum.",
            explanation: "Nasihat bukan sekadar teguran, tapi ketulusan dalam menjalankan kewajiban terhadap Allah dan sesama manusia."
          },
          {
            title: "Hadits 8: Memerangi Manusia",
            content: "أُمِرْتُ أَنْ أُقَاتِلَ النَّاسَ حَتَّى يَشْهَدُوا أَنْ لَا إِلَهَ إِلَّا اللَّهُ وَأَنَّ مُحَمَّدًارَسُولُ اللهِ... Meaning: Aku diperintahkan untuk memerangi manusia sampai mereka bersaksi bahwa tidak ada tuhan selain Allah dan Muhammad adalah utusan Allah...",
            explanation: "Pentingnya tauhid sebagai syarat utama keselamatan dan kehormatan seorang muslim."
          },
          {
            title: "Hadits 9: Sesuai Kemampuan",
            content: "مَا نَهَيْتُكُمْ عَنْهُ فَاجْتَنِبُوهُ وَمَا أَمَرْتُكُمْ بِهِ فَأْتُوا مِنْهُ مَا اسْتَطعتُمْ Meaning: Apa yang aku larang, tinggalkanlah. Dan apa yang aku perintahkan, kerjakanlah semampu kalian.",
            explanation: "Islam adalah agama yang memudahkan, memberikan kewajiban sesuai batas kemampuan hamba-Nya."
          },
          {
            title: "Hadits 10: Makan yang Halal",
            content: "إِنَّ اللَّهَ طَيِّبٌ لَا يَقْبَلُ إِلَّا طَيِّبًا... Meaning: Sesungguhnya Allah itu baik dan tidak menerima kecuali yang baik. Dan Allah memerintahkan orang beriman sebagaimana memerintah para Rasul...",
            explanation: "Kaitan antara makanan yang halal dengan terkabulnya doa dan kesucian hati."
          },
          {
            title: "Hadits 11: Tinggalkan yang Ragu",
            content: "دَعْ مَا يَرِيبُكَ إِلَى مَا لَا يَرِيبُكَ Meaning: Tinggalkanlah apa yang meragukanmu menuju apa yang tidak meragukanmu.",
            explanation: "Wara' (kehati-hatian) dalam agama dengan menjauhi perkara syubhat demi ketenangan jiwa."
          }
        ]
      },
      {
        title: "Akhlak & Muamalah",
        content: "Interaksi sosial antar umat.",
        learningActivity: "Simulasi Kasus: Memberikan skenario masalah sosial dan meminta siswa mencari solusinya berdasarkan hadits arba'in yang relevan.",
        dailyLife: "Membangun hubungan yang harmonis dengan tetangga dan teman tanpa membeda-bedakan.",
        subsections: [
          {
            title: "Hadits 12: Meninggalkan yang Tak Bermanfaat",
            content: "مِنْ حُسْنِ إِسْلَامِ الْمَرْءِ تَرْكُهُ مَا لَا يَعْنِيهِ Meaning: Di antara tanda indahnya Islam seseorang adalah meninggalkan apa yang tidak bermanfaat baginya.",
            explanation: "Fokus pada hal yang produktif dan bermanfaat bagi dunia dan akhirat."
          },
          {
            title: "Hadits 13: Mencintai Saudara",
            content: "لَا يُؤْمِنُ أَحَدُكُمْ حَتَّى يُحِبَّ لِأَخِيهِ مَا يُحِبُّ لِنَفْسِهِ Meaning: Tidaklah beriman salah seorang di antara kalian sampai ia mencintai untuk saudaranya apa yang ia cintai untuk dirinya sendiri.",
            explanation: "Prinsip empati dan kasih sayang yang tulus dalam persaudaraan Islam."
          },
          {
            title: "Hadits 14: Larangan Menumpahkan Darah",
            content: "لَا يَحِلُّ دَمُ امْرِئٍ مُسْلِمٍ إِلَّا بِإِحْدَى ثَلَاثٍ: الثَّيِّبُ الزَّانِي، وَالنَّفْسُ بِالنَّفْسِ... Meaning: Tidak halal darah seorang muslim kecuali karena satu dari tiga hal: orang tua yang berzina, jiwa dengan jiwa (qishash)...",
            explanation: "Kehormatan nyawa seorang muslim sangat dijaga dalam syariat Islam."
          },
          {
            title: "Hadits 15: Berkata Baik",
            content: "مَنْ كَانَ يُؤْمِنُ بِاللَّهِ وَالْيَوْمِ الْآخِرِ فَلْيَقُلْ خَيْرًا أَوْ لِيَصْمُتْ Meaning: Barangsiapa beriman kepada Allah dan hari akhir, hendaklah ia berkata baik atau diam.",
            explanation: "Lisan adalah cerminan iman. Jika tidak ada kebaikan dalam ucapan, diam adalah pilihan terbaik."
          },
          {
            title: "Hadits 16: Jangan Marah",
            content: "لَا تَغْضَبْ، فَرَدَّدَ مِرَارًا، قَالَ: لَا تَغْضَبْ Meaning: Janganlah engkau marah. Beliau mengulanginya berkali-kali: Janganlah engkau marah.",
            explanation: "Pentingnya mengendalikan emosi karena kemarahan sering kali menjadi pintu setan dan sumber penyesalan."
          },
          {
            title: "Hadits 17: Berlaku Ihsan",
            content: "إِنَّ اللَّهَ كَتَبَ الْإِحْسَانَ عَلَى كُلِّ شَيْءٍ Meaning: Sesungguhnya Allah mewajibkan berlaku ihsan (berbuat baik) pada segala sesuatu.",
            explanation: "Islam mengajarkan profesionalisme dan kebaikan dalam segala hal, bahkan saat menyembelih hewan sekalipun."
          },
          {
            title: "Hadits 18: Taqwa & Akhlak Baik",
            content: "اتَّقِ اللَّهَ حَيْثُمَا كُنْتَ، وَأَتْبِعِ السَّيِّئَةَ الْحَسَنَةَ تَمْحُهَا Meaning: Bertaqwalah kepada Allah di mana pun engkau berada, dan ikutilah keburukan dengan kebaikan niscaya akan menghapusnya...",
            explanation: "Hubungan vertikal dengan Allah (taqwa) harus diimbangi dengan hubungan horizontal (akhlak mulia)."
          },
          {
            title: "Hadits 19: Menjaga Allah",
            content: "احْفَظِ اللَّهَ يَحْفَظْكَ، احْفَظِ اللَّهَ تَجِدْهُ تُجَاهَكَ Meaning: Jagalah Allah, niscaya Dia akan menjagamu. Jagalah Allah, niscaya engkau akan mendapati-Nya di hadapanmu...",
            explanation: "Keyakinan mutlak bahwa pertolongan dan perlindungan datang hanya dari Allah SWT."
          },
          {
            title: "Hadits 20: Malu",
            content: "إِنَّ مِمَّا أَدْرَكَ النَّاسُ مِنْ كَلَامِ النُّبُوَّةِ الْأُولَى: إِذَا لَمْ تَسْتَحِ فَاصْنَعْ مَا شِئْتَ Meaning: Sesungguhnya di antara ungkapan kenabian terdahulu adalah: Jika engkau tidak malu, maka berbuatlah sesukamu.",
            explanation: "Rasa malu adalah benteng terakhir akhlak manusia agar tidak terjerumus dalam kemaksiatan."
          },
          {
            title: "Hadits 21: Istiqamah",
            content: "قُلْ آمَنْتُ بِاللَّهِ ثُمَّ اسْتَقِمْ Meaning: Katakanlah: Aku beriman kepada Allah, kemudian beristiqamahlah.",
            explanation: "Konsistensi dalam iman dan ketaatan adalah kunci keberhasilan di dunia dan akhirat."
          },
          {
            title: "Hadits 22: Menunaikan Kewajiban",
            content: "أَرَأَيْتَ إِذَا صَلَّيْتُ الْمَكْتُوبَاتِ وَصُمْتُ رَمَضَانَ... Meaning: Bagaimana pendapatmu jika aku shalat fardu, puasa Ramadhan... apakah aku masuk surga? Beliau menjawab: Ya.",
            explanation: "Kesederhanaan dalam beragama dengan fokus pada rukun-rukun utama yang diwajibkan."
          },
          {
            title: "Hadits 23: Macam-macam Kebaikan",
            content: "الطُّهُورُ شَطْرُ الْإِيمَانِ، وَالْحَمْدُ لِلَّهِ تَمْلأُ الْمِيزَانَ Meaning: Kesucian adalah sebagian dari iman, Alhamdulillah memenuhi timbangan...",
            explanation: "Dahsyatnya kutamaan zikir dan amal jariyah dalam memenuhi timbangan kebaikan."
          },
          {
            title: "Hadits 24: Larangan Berbuat Zalim",
            content: "يَا عِبَادِي إِنِّي حَرَّمْتُ الظُّلْمَ عَلَى نَفْسِي وَجَعَلْتُهُ بَيْنَكُمْ مُحَرَّمًا Meaning: Wahai hamba-Ku, sesungguhnya Aku mengharamkan kezaliman atas diri-Ku dan menjadikannya haram di antara kalian...",
            explanation: "Kezaliman adalah kegelapan di hari kiamat dan sangat dibenci oleh Allah SWT."
          },
          {
            title: "Hadits 25: Sedekah",
            content: "أَلَيْسَ قَدْ جَعَلَ اللَّهُ لَكُمْ مَا تَصَّدَّقُونَ؟ Meaning: Bukankah Allah telah menjadikan bagi kalian jalan untuk bersedekah? Setiap tasbih adalah sedekah...",
            explanation: "Pintu sedekah terbuka lebar tidak hanya bagi orang kaya, tapi bagi siapa pun yang berzikir dan berbuat baik."
          },
          {
            title: "Hadits 26: Setiap Persendian Ada Sedekahnya",
            content: "كُلُّ سُلَامَى مِنَ النَّاسِ عَلَيْهِ صَدَقَةٌ كُلَّ يَوْمٍ تَطْلُعُ فِيهِ الشَّمْسُ Meaning: Setiap persendian manusia memiliki sedekah setiap hari matahari terbit...",
            explanation: "Membangun kesadaran syukur atas kesehatan dan kemampuan fisik dengan membantu sesama."
          },
          {
            title: "Hadits 27: Kebaikan & Dosa",
            content: "الْبِرُّ حُسْنُ الْخُلُقِ، وَالإِثْمُ مَا حَاكَ فِي نَفْسِكَ Meaning: Kebaikan adalah akhlak yang baik, dan dosa adalah apa yang mengganjal di hatimu...",
            explanation: "Hati nurani orang beriman adalah alarm alami untuk mendeteksi kebenaran dan dosa."
          },
          {
            title: "Hadits 28: Berpegang Teguh pada Sunnah",
            content: "عَلَيْكُمْ بِسُنَّتِي وَسُنَّةِ الْخُلَفَاءِ الرَّاشِدِينَ الْمَهْدِيِّينَ Meaning: Hendaklah kalian berpegang teguh pada sunnahku dan sunnah Khulafaur Rasyidin...",
            explanation: "Pentingnya mengikuti jejak Rasulullah dan para sahabat saat terjadi perselisihan umat."
          },
          {
            title: "Hadits 29: Jalan Menuju Surga",
            content: "أَلَا أَدُلُّكَ عَلَى أَبْوَابِ الْخَيْرِ؟ الصَّوْمُ جُنَّةٌ... Meaning: Maukah engkau aku tunjukkan pintu-pintu kebaikan? Puasa adalah perisai, sedekah menghapus dosa...",
            explanation: "Ringkasan amal-amal utama yang menjadi benteng dari api neraka dan jalan ke surga."
          },
          {
            title: "Hadits 30: Menjaga Batas Allah",
            content: "إِنَّ اللَّهَ تَعَالَى فَرَضَ فَرَائِضَ فَلَا تُضَيِّعُوهَا Meaning: Sesungguhnya Allah telah menetapkan berbagai kewajiban, maka janganlah kalian menyia-nyiakannya...",
            explanation: "Disiplin dalam menjalankan syariat dengan menghormati batasan-batasan hukum yang ada."
          },
          {
            title: "Hadits 31: Zuhud terhadap Dunia",
            content: "ازْهَدْ فِي الدُّنْيَا يُحِبَّكَ اللَّهُ، وَازْهَدْ فِيمَا عِنْدَ النَّاسِ يُحِبَّكَ النَّاسُ Meaning: Zuhudlah terhadap duni, niscaya Allah akan mencintaimu. Zuhudlah terhadap apa yang ada pada manusia, niscaya manusia akan mencintaimu.",
            explanation: "Ketidakbergantungan hati pada materi membawa ketenangan dan disenangi oleh sesama."
          },
          {
            title: "Hadits 32: Larangan Membahayakan",
            content: "لَا ضَرَرَ وَلَا ضِرَارَ Meaning: Tidak boleh berbuat yang membahayakan diri sendiri dan tidak boleh membahayakan orang lain.",
            explanation: "Prinsip dasar keselamatan dan kedamaian dalam hubungan sosial muslim."
          },
          {
            title: "Hadits 33: Bukti bagi Penuntut",
            content: "الْبَيِّنَةُ عَلَى الْمُدَّعِي، وَالْيَمِينُ عَلَى مَنْ أَنْكَرَ Meaning: Bukti wajib bagi penuntut, dan sumpah bagi yang mengingkari.",
            explanation: "Asas keadilan dalam sistem hukum Islam untuk mencegah tuduhan palsu."
          },
          {
            title: "Hadits 34: Amar Ma'ruf Nahi Munkar",
            content: "مَنْ رَأَى مِنْكُمْ مُنْكَرًا فَلْيُغَيِّرْهُ بِيَدِهِ... Meaning: Barangsiapa melihat kemunkaran, hendaklah ia merubahnya dengan tangannya...",
            explanation: "Tanggung jawab sosial setiap muslim untuk memperbaiki lingkungan sesuai kapasitasnya."
          },
          {
            title: "Hadits 35: Persaudaraan Islam",
            content: "لَا تَحَاسَدُوا، وَلَا تَنَاجَشُوا، وَلَا تَبَاغَضُوا... Meaning: Janganlah saling mendengki, janganlah saling menipu, janganlah saling membenci...",
            explanation: "Membangun soliditas umat dengan membuang penyakit hati yang merusak persaudaraan."
          },
          {
            title: "Hadits 36: Membantu Kesulitan Muslim",
            content: "مَنْ نَفَّسَ عَنْ مُؤْمِنٍ كُرْبَةً مِنْ كُرَبِ الدُّنْيَا... Meaning: Barangsiapa meringankan satu kesulitan orang beriman di dunia, Allah akan meringankan kesulitannya di akhirat...",
            explanation: "Janji balasan kebaikan yang berlipat ganda bagi orang yang peduli pada saudaranya."
          },
          {
            title: "Hadits 37: Kebaikan & Keburukan",
            content: "إِنَّ اللَّهَ كَتَبَ الْحَسَنَاتِ وَالسَّيِّئَاتِ ثُمَّ بَيَّنَ ذَلِكَ... Meaning: Sesungguhnya Allah telah menetapkan kebaikan dan keburukan. Barangsiapa berniat baik namun belum melakukannya, ditulis satu kebaikan penuh...",
            explanation: "Maha Pemurahnya Allah dalam menilai niat baik dan melipatgandakan pahala kebaikan."
          },
          {
            title: "Hadits 38: Ibadah Sunnah & Wali Allah",
            content: "وَمَا تَقَرَّبَ إِلَيَّ عَبْدِي بِشَيْءٍ أَحَبَّ إِلَيَّ مِمَّا افْتَرَضْتُ عَلَيْهِ... Meaning: Hambaku tidak mendekatkan diri kepada-Ku dengan sesuatu yang lebih Aku cintai daripada apa yang telah Aku wajibkan. Lalu ia terus mendekat dengan amalan sunnah...",
            explanation: "Jalan menuju kedekatan khusus dengan Allah (wilayah) melalui istiqamah dalam sunnah."
          },
          {
            title: "Hadits 39: Kemaafan bagi Khilaf",
            content: "إِنَّ اللَّهَ تَجَاوَزَ لِي عَنْ أُمَّتِي الْخَطَأَ وَالنِّسْيَانَ Meaning: Sesungguhnya Allah memaafkan bagi umatku perbuatan yang salah karena tidak sengaja, lupa, dan dipaksa.",
            explanation: "Rahmat Allah yang sangat luas bagi keterbatasan dan ketidaksengajaan hamba-Nya."
          },
          {
            title: "Hadits 40: Hidup di Dunia Sebagai Orang Asing",
            content: "كُنْ فِي الدُّنْيَا كَأَنَّكَ غَرِيبٌ أَوْ عَابِرُ سَبِيلٍ Meaning: Jadilah engkau di dunia ini seakan-akan orang asing atau pengelana.",
            explanation: "Orientasi hidup orang beriman adalah akhirat, dunia hanyalah tempat persinggahan sementara."
          },
          {
            title: "Hadits 41: Tundukkan Hawa Nafsu",
            content: "لَا يُؤْمِنُ أَحَدُكُمْ حَتَّى يَكُونَ هَوَاهُ تَبَعًا لِمَا جِئْتُ بِهِ Meaning: Tidaklah sempurna iman kalian sampai hawa nafsunya mengikuti apa yang aku bawa (wahyu).",
            explanation: "Hakikat iman adalah penyerahan diri secara total kepada aturan Allah dan Rasul-Nya."
          },
          {
            title: "Hadits 42: Luasnya Ampunan Allah",
            content: "يَا ابْنَ آدَمَ إِنَّكَ مَا دَعَوْتَنِي وَرَجَوْتَنِي غَفَرْتُ لَكَ... Meaning: Wahai anak Adam, selama engkau berdoa dan berharap kepada-Ku, niscaya Aku ampuni dosamu dan Aku tidak peduli seberapa banyak itu...",
            explanation: "Harapan besar (Raja') bagi hamba yang berdosa untuk senantiasa kembali kepada ampunan Allah."
          }
        ]
      }
    ]
  },
  {
    id: "kode-etik-guru",
    title: "11 Kode Etik Guru",
    category: ModuleCategory.KODE_ETIK_GURU,
    summary: "Pedoman perilaku dan norma profesional bagi pendidik dalam menjalankan tugasnya.",
    sections: [
      {
        title: "Pokok-Pokok Kode Etik",
        content: "Implementasi 11 nilai utama dalam profesi keguruan.",
        learningActivity: "Simulasi Kasus Etika: Mendiskusikan berbagai dilema etika di sekolah dan bagaimana Kode Etik Guru memberikan solusi serta landasan bertindak.",
        dailyLife: "Menjadikan kode etik sebagai cermin dalam bersikap kepada siswa, rekan sejawat, dan lingkungan masyarakat setiap hari.",
        subsections: [
          {
            title: "1. Takwa & Akhlak Mulia",
            content: "Bertakwa kepada Tuhan Yang Maha Esa dan berakhlak mulia.",
            explanation: "Guru harus menjadi pribadi yang religius dan memiliki moralitas tinggi, karena guru adalah sumber inspirasi nilai bagi siswa."
          },
          {
            title: "2. Martabat Profesi",
            content: "Menjunjung tinggi martabat guru sebagai profesi terhormat.",
            explanation: "Menjaga sikap dan wibawa agar profesi guru tetap dipandang mulia oleh masyarakat melalui prestasi dan perilaku positif."
          },
          {
            title: "3. Keadilan & Profesionalitas",
            content: "Bertindak adil dan profesional terhadap peserta didik tanpa membedakan latar belakang.",
            explanation: "Memberikan layanan pendidikan yang sama kepada setiap siswa tanpa memandang status sosial, ekonomi, agama, maupun suku."
          },
          {
            title: "4. Menjaga Rahasia Siswa",
            content: "Menjaga rahasia peserta didik, kecuali dalam keadaan yang mengharuskan secara hukum.",
            explanation: "Privasi siswa harus dilindungi guna membangun kepercayaan, kecuali jika informasi tersebut membahayakan atau diperlukan oleh hukum."
          },
          {
            title: "5. Keteladanan",
            content: "Menjadi teladan bagi peserta didik dalam sikap, ucapan, dan perilaku.",
            explanation: "Semboyan 'Ing Ngarsa Sung Tulada'—guru adalah contoh nyata yang akan ditiru oleh peserta didik dalam kehidupan mereka."
          },
          {
            title: "6. Pengembangan Kompetensi",
            content: "Mengembangkan kompetensi secara berkelanjutan melalui pembelajaran dan pelatihan.",
            explanation: "Seorang pendidik harus terus belajar (Long Life Education) agar kualitas pengajaran selalu relevan dengan perkembangan zaman."
          },
          {
            title: "7. Komunikasi Positif",
            content: "Membangun komunikasi yang baik dengan orang tua, kolega, dan masyarakat.",
            explanation: "Pendidikan adalah tanggung jawab bersama; sinergi dengan berbagai pihak sangat diperlukan untuk mendukung keberhasilan siswa."
          },
          {
            title: "8. Netralitas Sosial-Politik",
            content: "Menjaga netralitas dalam kehidupan sosial-politik selama menjalankan tugas.",
            explanation: "Guru tidak boleh menggunakan pengaruhnya di sekolah untuk kepentingan politik praktis tertentu demi menjaga objektivitas pendidikan."
          },
          {
            title: "9. Integritas (Anti Kecurangan)",
            content: "Menolak segala bentuk kecurangan, termasuk suap, gratifikasi, dan manipulasi nilai.",
            explanation: "Kejujuran adalah pondasi ilmu. Guru harus memberikan nilai yang objektif dan menolak segala bentuk pemberian yang menyuap."
          },
          {
            title: "10. Komitmen Kejujuran",
            content: "Menolak segala bentuk kecurangan, termasuk suap, gratifikasi, dan manipulasi nilai.",
            explanation: "Penekanan kembali pada pentingnya integritas finansial dan akademik guna menjaga kesucian lembaga pendidikan."
          },
          {
            title: "11. Kepatuhan Hukum",
            content: "Mematuhi Peraturan dan Kode Etik Profesi Guru.",
            explanation: "Taat pada aturan profesi dan regulasi pemerintah sebagai bentuk tanggung jawab hukum dan etika seorang aparatur maupun pendidik."
          }
        ]
      }
    ]
  },
  {
    id: "sahabat-nabi",
    title: "200 Kisah Sahabat Nabi",
    category: ModuleCategory.SAHABAT,
    summary: "Kumpulan biografi dan perjuangan para sahabat Nabi Muhammad SAW yang menjadi teladan bagi umat Islam.",
    sections: [
      {
        title: "Khulafaur Rasyidin",
        content: "Empat pemimpin besar setelah wafatnya Rasulullah SAW.",
        learningActivity: "Peta Konsep Kepemimpinan: Membuat diagram perbandingan gaya kepemimpinan keempat khalifah dan kontribusi utamanya bagi dakwah Islam.",
        dailyLife: "Meneladani keberanian Ali, kedermawanan Usman, ketegasan Umar, dan kelembutan hati Abu Bakar dalam pergaulan.",
        subsections: [
          {
            title: "Abu Bakar Ash-Shiddiq",
            content: "Khalifah pertama yang dikenal dengan gelar Ash-Shiddiq (yang membenarkan). Mempertaruhkan harta dan nyawa untuk menemani Rasulullah hijrah.",
            explanation: "Biografi: Lahir di Makkah, sahabat terdekat Nabi. Perjuangan: Memerangi nabi palsu, mengumpulkan Al-Qur'an, dan membebaskan budak (termasuk Bilal) demi tegaknya kalimat tauhid."
          },
          {
            title: "Umar bin Khattab",
            content: "Khalifah kedua yang dijuluki Al-Faruq (pemisah antara hak dan batil). Dikenal dengan keadilannya yang sangat tinggi.",
            explanation: "Biografi: Dari suku Quraisy, awalnya penentang Islam hingga hidayah masuk lewat surah Thaha. Perjuangan: Memperluas wilayah Islam, membangun sistem pemerintahan modern (baitul mal), dan dikenal sangat tegas melawan kezaliman."
          },
          {
            title: "Usman bin Affan",
            content: "Khalifah ketiga yang dijuluki Dzun Nurain (pemilik dua cahaya). Sahabat yang sangat kaya namun sangat dermawan.",
            explanation: "Biografi: Menikahi dua putri Rasulullah (Ruqayyah dan Ummu Kultsum). Perjuangan: Membiayai sumur Rum yang sangat mahal untuk umat, melengkapi pasukan Tabuk, dan membukukan Al-Qur'an menjadi standar Mushaf Usmani."
          },
          {
            title: "Ali bin Abi Thalib",
            content: "Khalifah keempat, sepupu sekaligus menantu Rasulullah. Pintu ilmu dan pemberani di medan perang.",
            explanation: "Biografi: Orang pertama dari kalangan anak-anak yang masuk Islam. Perjuangan: Tidur di ranjang Nabi saat malam hijrah untuk mengelabui kafir Quraisy, menjadi panglima di setiap perang, dan menjaga integritas ilmu umat."
          }
        ]
      },
      {
        title: "Sahabat yang Dijamin Masuk Surga (Lainnya)",
        content: "Tokoh-tokoh mulia yang disebutkan langsung kesuciannya oleh Rasulullah.",
        subsections: [
          {
            title: "Thalhah bin Ubaidillah",
            content: "Burung elang Uhud yang melindungi Rasulullah dengan tangannya hingga cacat.",
            explanation: "Biografi: Pedagang sukses yang menginfakkan hartanya di jalan Allah. Perjuangan: Menjadi perisai hidup bagi Rasulullah di perang Uhud hingga menderita puluhan luka tusukan."
          },
          {
            title: "Az-Zubair bin Al-Awwam",
            content: "Hawari (pengawal setia) Rasulullah SAW.",
            explanation: "Biografi: Orang pertama yang menghunus pedang di jalan Allah saat mendengar isu Nabi wafat. Perjuangan: Selalu berada di barisan terdepan dalam setiap peperangan Islam."
          },
          {
            title: "Abdurrahman bin Auf",
            content: "Sahabat paling kaya namun sangat rendah hati dan dermawan.",
            explanation: "Biografi: Berhijrah ke Madinah tanpa membawa apa-apa, mulai dari pasar hingga menjadi jutawan kembali. Perjuangan: Menginfakkan ratusan unta beserta muatannya untuk penduduk Madinah yang kelaparan."
          },
          {
            title: "Sa'ad bin Abi Waqqash",
            content: "Orang pertama yang melepaskan anak panah di jalan Allah.",
            explanation: "Biografi: Paman Rasulullah dari garis ibu. Perjuangan: Panglima perang Qadisiyah yang menaklukkan Persia, dikenal sebagai mustajab doanya."
          },
          {
            title: "Said bin Zaid",
            content: "Sahabat yang doanya mengguncang dunia.",
            explanation: "Biografi: Adik ipar Umar bin Khattab, termasuk golongan awal masuk Islam. Perjuangan: Mengabdikan seluruh hidupnya untuk dakwah tanpa pamrih kekuasaan."
          },
          {
            title: "Abu Ubaidah bin Al-Jarrah",
            content: "Aminu hadzihil Ummah (Kepercayaan umat ini).",
            explanation: "Biografi: Panglima perang yang sangat rendah hati. Perjuangan: Memimpin pasukan di Syam dan memilih hidup sederhana hingga wafatnya karena wabah thun."
          }
        ]
      },
      {
        title: "Sahabatiat (Wanita Mulia)",
        content: "Para pejuang wanita di masa awal Islam.",
        subsections: [
          {
            title: "Khadijah binti Khuwailid",
            content: "Istri pertama Rasulullah SAW dan orang pertama yang masuk Islam.",
            explanation: "Biografi: Seorang pengusaha sukses di Makkah. Perjuangan: Mengorbankan seluruh harta kekayaannya untuk mendukung dakwah Nabi di saat-saat tersulit."
          },
          {
            title: "Aisyah binti Abu Bakar",
            content: "Ibu guru kaum muslimin (Ummul Mukminin).",
            explanation: "Biografi: Putri Abu Bakar yang cerdas. Perjuangan: Mengajarkan ribuan hadits kepada umat Islam, menjadi rujukan ilmu setelah wafatnya Nabi."
          },
          {
            title: "Fathimah Az-Zahra",
            content: "Putri kesayangan Rasulullah SAW dan pemimpin wanita di surga.",
            explanation: "Biografi: Putri bungsu Nabi, istri Ali bin Abi Thalib. Perjuangan: Sabar mendampingi Nabi saat disakiti kaum kafir, hidup sangat sederhana namun penuh keberkahan."
          },
          {
            title: "Sumayyah binti Khayyat",
            content: "Syahidah (wanita syahid) pertama dalam Islam.",
            explanation: "Biografi: Ibu dari Ammar bin Yasir. Perjuangan: Teguh mempertahankan tauhid meski disiksa dengan kejam oleh Abu Jahl hingga nyawanya melayang."
          },
          {
            title: "Nusaibah binti Ka'ab (Ummu Umarah)",
            content: "Perisai hidup Rasulullah di perang Uhud.",
            explanation: "Biografi: Seorang wanita Ansar. Perjuangan: Memanggul senjata dan mendapatkan belasan luka demi melindungi tubuh Nabi dari serangan musuh."
          }
        ]
      },
      {
        title: "Ahli Al-Qur'an & Ilmu",
        content: "Para sahabat yang menjadi rujukan dalam ilmu syariah.",
        subsections: [
          {
            title: "Abdullah bin Abbas",
            content: "Turjumanul Qur'an (Penerjemah Al-Qur'an).",
            explanation: "Biografi: Sepupu Nabi yang doanya diberkahi Allah untuk memahami ta'wil. Perjuangan: Menjadi samudera ilmu bagi umat Islam lintas generasi."
          },
          {
            title: "Abdullah bin Mas'ud",
            content: "Sahabat yang paling mirip suaranya dengan Nabi saat membaca Al-Qur'an.",
            explanation: "Biografi: Bekas penggembala kambing yang menjadi ulama besar. Perjuangan: Orang pertama yang berani melantuntkan Al-Qur'an secara terang-terangan di depan Ka'bah."
          },
          {
            title: "Mu'adz bin Jabal",
            content: "Imam para Ulama di hari kiamat.",
            explanation: "Biografi: Sangat paham tentang halal dan haram. Perjuangan: Diutus Nabi ke Yaman sebagai hakim dan guru pertama untuk mengajarkan Islam."
          },
          {
            title: "Zaid bin Tsabit",
            content: "Penulis wahyu dan ahli waris.",
            explanation: "Biografi: Pemuda cerdas yang menguasai berbagai bahasa asing dalam waktu singkat. Perjuangan: Ketua tim pengumpul dan pembukuan Al-Qur'an di masa Abu Bakar dan Usman."
          },
          {
            title: "Ubay bin Ka'ab",
            content: "Sayyidul Qurra (Pemimpin para pembaca Al-Qur'an).",
            explanation: "Biografi: Salah satu penulis wahyu terbaik. Perjuangan: Menjadi rujukan utama sahabat lain dalam hal bacaan (qira'ah) Al-Qur'an."
          }
        ]
      },
      {
        title: "Panglima & Ksatria Islam",
        content: "Para pembela Islam di medan jihad.",
        subsections: [
          {
            title: "Khalid bin Walid",
            content: "Saifullah Al-Maslul (Pedang Allah yang Terhunus).",
            explanation: "Biografi: Panglima perang tak terkalahkan yang memimpin ratusan pertempuran. Perjuangan: Kunci kemenangan di perang Yamamah dan Yarmuk, menghabiskan seluruh hidupnya demi kejayaan Islam."
          },
          {
            title: "Hamzah bin Abdul Muthalib",
            content: "Asadullah (Singa Allah) dan Sayyidus Syuhada.",
            explanation: "Biografi: Paman tercinta Rasulullah SAW yang gagah perkasa. Perjuangan: Menjadi pembela utama Nabi di Makkah dan gugur syahid di perang Uhud dengan sangat mulia."
          },
          {
            title: "Ja'far bin Abi Thalib",
            content: "Abul Masakin (Bapak orang miskin) dan At-Thayyar (yang terbang dengan dua sayap di surga).",
            explanation: "Biografi: Kakak Ali bin Abi Thalib. Perjuangan: Memimpin hijrah ke Habasyah dan gugur syahid di perang Mu'tah setelah kedua tangannya putus menjaga bendera tauhid."
          },
          {
            title: "Amru bin Ash",
            content: "Sang Penakluk Mesir.",
            explanation: "Biografi: Seorang diplomat ulung yang sangat cerdas. Perjuangan: Membawa cahaya Islam ke bumi Mesir dan membangun peradaban Islam yang kuat di sana."
          },
          {
            title: "Ikrimah bin Abu Jahl",
            content: "Putra musuh Islam yang menjadi pahlawan Islam.",
            explanation: "Biografi: Putra Abu Jahl yang awalnya sangat membenci Islam. Perjuangan: Setelah masuk Islam, ia menebus masa lalunya dengan menjadi pejuang paling tangguh di barisan depan perang Yarmuk."
          }
        ]
      },
      {
        title: "Ahli Ibadah & Pecinta Nabi",
        content: "Sahabat yang dikenal dengan kedekatannya secara spiritual dengan Rasulullah.",
        subsections: [
          {
            title: "Bilal bin Rabah",
            content: "Muazin Rasulullah SAW.",
            explanation: "Biografi: Budak dari Habasyah yang dimerdekakan Abu Bakar. Perjuangan: Tetap berteriak 'Ahad! Ahad!' meski ditindih batu panas, suaranya menjadi penyejuk hati umat di setiap waktu shalat."
          },
          {
            title: "Salman Al-Farisi",
            content: "Pencari kebenaran dari Persia.",
            explanation: "Biografi: Anak pembesar Majusi yang berkelana mencari Nabi terakhir. Perjuangan: Memberikan ide cerdas membangun parit (Khandaq) yang menyelamatkan Madinah dari kehancuran."
          },
          {
            title: "Abu Hurairah",
            content: "Sahabat yang paling banyak meriwayatkan hadits.",
            explanation: "Biografi: Penghuni Shuffah (terras masjid) yang hidup sangat sederhana. Perjuangan: Mengabdikan seluruh waktunya untuk menemani dan menghafal setiap sabda Nabi demi terjaganya ilmu."
          },
          {
            title: "Abdullah bin Umar",
            content: "Peniru setia jejak langkah Rasulullah SAW.",
            explanation: "Biografi: Putra Umar bin Khattab. Perjuangan: Sangat teliti dalam mengikuti setiap sunnah Nabi, bahkan dalam cara berjalan dan duduk, menjadi teladan bagi ahli ibadah."
          },
          {
            title: "Anas bin Malik",
            content: "Pelayan setia Rasulullah SAW selama 10 tahun.",
            explanation: "Biografi: Memulai khidmahnya saat masih kecil hingga Nabi wafat. Perjuangan: Menjadi saksi kunci kehidupan pribadi Nabi dan meneruskan kasih sayang Nabi lewat pengajaran ilmu."
          }
        ]
      },
      {
        title: "Pemuka Kaum Ansar",
        content: "Para penduduk Madinah yang menolong kaum Muhajirin.",
        subsections: [
          {
            title: "Sa'ad bin Mu'adz",
            content: "Sahabat yang kematiannya membuat Arasy Allah berguncang.",
            explanation: "Biografi: Pemimpin suku Aus yang masuk Islam di tangan Mush'ab bin Umair. Perjuangan: Menjadi pembela utama Nabi di Madinah dan penentu keputusan adil dalam perang Ahzab."
          },
          {
            title: "Sa'ad bin Ubadah",
            content: "Pemimpin suku Khazraj yang sangat dermawan.",
            explanation: "Biografi: Pemimpin Ansar yang selalu menyediakan makanan bagi tamu dan nabi. Perjuangan: Menyerahkan seluruh pengaruh dan kekuatannya demi kejayaan Islam di Madinah."
          },
          {
            title: "Abu Ayyub Al-Anshari",
            content: "Tuan rumah Rasulullah SAW saat pertama kali tiba di Madinah.",
            explanation: "Biografi: Rumahnya terpilih menjadi tempat singgah Nabi. Perjuangan: Terus berjihad hingga usia senja, bahkan makamnya berada di Konstantinopel karena cita-citanya membebaskan kota tersebut."
          },
          {
            title: "Usaid bin Hudhair",
            content: "Sahabat yang bacaan Al-Qur'annya didengar oleh malaikat.",
            explanation: "Biografi: Memiliki suara yang sangat merdu saat melantunkan wahyu. Perjuangan: Salah satu tokoh penting yang memfasilitasi konversi besar-besaran penduduk Madinah ke Islam."
          },
          {
            title: "Abdurrahman bin Zaid",
            content: "Salah satu tokoh Ansar yang taat.",
            explanation: "Biografi: Penduduk Madinah yang setia. Perjuangan: Membantu dakwah di Madinah dengan tulus ikhlas."
          }
        ]
      },
      {
        title: "Duta & Diplomat Islam",
        content: "Para sahabat yang menjadi penyambung lidah dakwah ke berbagai negeri.",
        subsections: [
          {
            title: "Mush'ab bin Umair",
            content: "Duta Islam pertama (The First Teacher).",
            explanation: "Biografi: Pemuda bangsawan paling tampan dan kaya di Makkah yang meninggalkan segalanya demi Islam. Perjuangan: Mengislamkan Madinah sendirian sebelum Nabi hijrah, gugur syahid di Uhud dengan kain kafan yang tidak cukup menutupi tubuhnya."
          },
          {
            title: "Dihyah Al-Kalbi",
            content: "Sahabat yang wajahnya seringkali dipinjam oleh Malaikat Jibril saat menemui Nabi.",
            explanation: "Biografi: Pria yang sangat rupawan. Perjuangan: Menjadi utusan Nabi mengirimkan surat dakwah kepada Kaisar Heraklius dari Romawi."
          },
          {
            title: "Thumamah bin Utsal",
            content: "Pemimpin Yamamah yang masuk Islam karena terpesona akhlak Nabi.",
            explanation: "Biografi: Awalnya ditawan di masjid, kemudian jatuh cinta pada Islam. Perjuangan: Menjadi pembela tegar saat munculnya nabi palsu Musailamah Al-Kadzab."
          },
          {
            title: "Abdullah bin Hudzafah",
            content: "Sahabat yang mencium kening Raja Romawi demi membebaskan tawanan muslim.",
            explanation: "Biografi: Seorang diplomat yang sangat pemberani. Perjuangan: Teguh pada imannya meski diancam disiksa dalam kuali panas oleh kaisar Romawi, hingga kaisar pun kagum padanya."
          },
          {
            title: "Hatib bin Abi Balta'ah",
            content: "Utusan Nabi ke Mesir (Muqauqis).",
            explanation: "Biografi: Diplomat yang cakap. Perjuangan: Membuka komunikasi dengan pemimpin Mesir yang kemudian memberikan hadiah-hadiah mulia termasuk Maria al-Qibthiyah kepada Nabi."
          }
        ]
      },
      {
        title: "Penyair & Sastrawan Islam",
        content: "Para pembela Islam lewat bait-bait syair yang tajam.",
        subsections: [
          {
            title: "Hassan bin Tsabit",
            content: "Penyair Rasulullah SAW.",
            explanation: "Biografi: Memiliki lisan yang sangat tajam bagi musuh Islam. Perjuangan: Membela kehormatan Nabi lewat syair-syairnya yang membuat nyali kafir Quraisy ciut."
          },
          {
            title: "Abdullah bin Rawahah",
            content: "Penyair yang syahid di medan Mu'tah.",
            explanation: "Biografi: Salah satu dari tiga komandan di perang Mu'tah. Perjuangan: Membakar semangat pasukan muslim lewat lantunan syair-syair tauhidnya di medan perang."
          },
          {
            title: "Mus'ab bin Umair (Makkah)",
            content: "Sang bangsawan yang memilih kemiskinan demi Islam.",
            explanation: "Biografi: Pemuda paling rapi di Makkah. Perjuangan: Menghadapi boikot ibunya sendiri demi mempertahankan keislamannya hingga ia diutus menjadi guru di Madinah."
          }
        ]
      }
    ]
  },
  {
    id: "keluarga-nabi",
    title: "Keluarga Rasulullah SAW",
    category: ModuleCategory.KELUARGA_NABI,
    summary: "Mengenal lebih dekat silsilah, istri-istri, dan putra-putri Baginda Nabi Muhammad SAW sebagai teladan keluarga sakinah.",
    sections: [
      {
        title: "Pohon Keturunan (Silsilah)",
        content: "Garis keturunan mulia dari jalur ayah dan ibu hingga Nabi Ismail AS dan Nabi Ibrahim AS.",
        visualization: {
          type: 'concept-map',
          data: ["Adnan", "Ma'ad", "Nizar", "Mudhar", "Ilyas", "Mudrikah", "Khuzaimah", "Kinanah", "Al-Nadr", "Malik", "Fihr (Quraisy)", "Ghalib", "Lu'ay", "Ka'ab", "Murrah", "Kilab", "Qushay", "Abdu Manaf", "Hashim", "Abdul Muthalib", "Abdullah", "MUHAMMAD SAW"]
        },
        subsections: [
          {
            title: "Nasab Ayah",
            content: "Muhammad bin Abdullah bin Abdul Muthalib bin Hashim bin Abdu Manaf bin Qushay bin Kilab...",
            explanation: "Nasab Nabi Muhammad adalah nasab yang paling mulia di kalangan bangsa Arab."
          },
          {
            title: "Nasab Ibu",
            content: "Aminah binti Wahb bin Abdu Manaf bin Zuhrah bin Kilab.",
            explanation: "Kedua orang tua Nabi bertemu di kakek yang sama yaitu Kilab bin Murrah."
          }
        ]
      },
      {
        title: "Ummul Mukminin (Istri-Istri Nabi)",
        content: "Wanita-wanita mulia yang mendampingi perjuangan dakwah Rasulullah SAW.",
        subsections: [
          {
            title: "Khadijah binti Khuwailid",
            content: "Istri pertama, cinta sejati Nabi, dan orang pertama yang mengimani kerasulan beliau.",
            explanation: "Mendampingi Nabi selama 25 tahun hingga wafat di tahun kesedihan (Amul Huzni)."
          },
          {
            title: "Saudah binti Zam'ah",
            content: "Wanita pertama yang dinikahi Nabi setelah wafatnya Khadijah, dikenal karena kedermawanannya.",
            explanation: "Dinikahi untuk menjaga beliau dan anak-anak beliau setelah Khadijah wafat."
          },
          {
            title: "Aisyah binti Abu Bakar",
            content: "Putri sahabat terdekat Nabi, dikenal sangat cerdas dan banyak meriwayatkan hadits.",
            explanation: "Menjadi rujukan ilmu bagi para sahabat setelah wafatnya Rasulullah."
          },
          {
            title: "Hafshah binti Umar",
            content: "Putri Umar bin Khattab, penjaga mushaf Al-Qur'an yang pertama.",
            explanation: "Dikenal sebagai ahli ibadah yang tekun (puasa dan shalat malam)."
          },
          {
            title: "Zainab binti Khuzaimah",
            content: "Dijuluki 'Ummul Masakin' (Ibu para orang miskin) karena kedermawanannya.",
            explanation: "Wafat hanya beberapa bulan setelah menikah dengan Nabi."
          },
          {
            title: "Ummu Salamah (Hindun binti Abi Umayyah)",
            content: "Dikenal karena kecerdasan dan pendapatnya yang bijak saat perjanjian Hudaibiyah.",
            explanation: "Istri yang paling terakhir wafat di antara Ummul Mukminin."
          },
          {
            title: "Zainab binti Jahsy",
            content: "Sepupu Nabi, dikenal karena kerajinan tangannya dan sering bersedekah dari hasil usahanya.",
            explanation: "Allah sendiri yang menikahkan beliau dengan Nabi melalui wahyu (Surah Al-Ahzab)."
          },
          {
            title: "Juwairiyah binti Al-Harits",
            content: "Membawa keberkahan bagi kaumnya (Bani Mustaliq) yang semuanya masuk Islam setelah ia dinikahi Nabi.",
            explanation: "Termasuk tawanan perang yang kemudian dimerdekakan dan dinikahi."
          },
          {
            title: "Ummu Habibah (Ramlah binti Abi Sufyan)",
            content: "Teguh memegang Islam meskipun ayahnya saat itu adalah musuh utama Islam di Makkah.",
            explanation: "Melakukan hijrah ke Habasyah demi mempertahankan akidah."
          },
          {
            title: "Shafiyah binti Huyay",
            content: "Keturunan Nabi Harun AS, menunjukkan bahwa Islam merangkul semua latar belakang.",
            explanation: "Nabi bersabda kepadanya: 'Ayahmu adalah nabi (Harun) dan pamanmu nabi (Musa).'"
          },
          {
            title: "Maimunah binti Al-Harits",
            content: "Istri terakhir yang dinikahi Nabi, dikenal sangat menjaga silaturahmi.",
            explanation: "Meninggal di tempat yang sama saat ia menikah dengan Nabi (Saraf)."
          },
          {
            title: "Maria Al-Qibthiyah",
            content: "Ibunda Ibrahim (putra Nabi), pemberian dari Raja Muqauqis dari Mesir.",
            explanation: "Meskipun sering disebut istri, beberapa sejarawan menyebut beliau sebagai Ummu Walad."
          }
        ]
      },
      {
        title: "Putra-Putri Rasulullah SAW",
        content: "Tujuh orang putra dan putri Nabi, enam dari Khadijah dan satu dari Maria.",
        subsections: [
          { title: "Al-Qasim", content: "Putra tertua Nabi, darinya Nabi mendapat kunyah 'Abul Qasim'. Wafat saat masih kecil." },
          { title: "Zainab", content: "Putri tertua, dinikahi oleh Abul Ash bin Al-Rabi'. Memberi Nabi cucu bernama Ali dan Umamah." },
          { title: "Ruqayyah", content: "Dinikahi oleh Usman bin Affan, ikut hijrah ke Habasyah dan Madinah." },
          { title: "Ummu Kultsum", content: "Dinikahi oleh Usman bin Affan setelah wafatnya Ruqayyah (sehingga Usman dijuluki Dzun Nurain)." },
          { title: "Fathimah Az-Zahra", content: "Putri bungsu kesayangan, pemimpin wanita surga, istri Ali bin Abi Thalib, ibunda Hasan dan Husain." },
          { title: "Abdullah", content: "Dijuluki At-Thayyib dan At-Thahir. Wafat saat masih kanak-kanak." },
          { title: "Ibrahim", content: "Putra dari Maria Al-Qibthiyah, lahir di Madinah dan wafat saat masih bayi." }
        ]
      }
    ]
  },
  {
    id: "kamus-arab",
    title: "Kamus Bahasa Arab & Bilangan",
    category: ModuleCategory.KAMUS_ARAB,
    summary: "Panduan kosa kata tematik, percakapan harian, dan sistem bilangan Arab dari 1 hingga 1.000.000 dengan harakat.",
    sections: [
      {
        title: "Percakapan Arab ( المُحَادَثَةُ العَرَبِيَّةُ )",
        content: "Contoh percakapan sehari-hari dengan harakat dan terjemahan untuk melatih kelancaran lisan.",
        subsections: [
          { 
            title: "Perkenalan ( التَّعَارُفُ )", 
            content: "أَهْلًا وَسَهْلًا (Ahlan wa Sahlan) - Selamat Datang | أَهْلًا بِكَ (Ahlan bika) - Selamat Datang Juga | كَيْفَ حَالُكَ؟ (Kaifa Haaluka?) - Apa Kabarmu? | أَنَا بِخَيْرٍ (Ana bi-Khairin) - Saya Baik" 
          }
        ]
      },
      {
        title: "Bilangan 1 - 20 ( الأَرْقَامُ )",
        content: "Dasar-dasar angka dalam bahasa Arab lengkap dengan harakat.",
        subsections: [
          { title: "1 - 10", content: "1: وَاحِدٌ (Waahid) | 10: عَشَرَةٌ (Asyarah)" }
        ]
      },
      {
        title: "Anggota Tubuh ( أَعْضَاءُ الجِسْمِ )",
        content: "Kosa kata anggota tubuh.",
        subsections: [
          { title: "Kepala", content: "رَأْسٌ (Ra'sun) - Kepala | شَعْرٌ (Sya'run) - Rambut | عَيْنٌ (Ainun) - Mata | أُذُنٌ (Udzunun) - Telinga" }
        ]
      },
      {
        title: "Warna ( الأَلْوَانُ )",
        content: "Warna-warna dasar dalam bahasa Arab.",
        subsections: [
          { title: "Warna Dasar", content: "أَبْيَضُ (Abyadh) - Putih | أَسْوَدُ (Aswad) - Hitam | أَحْمَرُ (Ahmar) - Merah | أَزْرَقُ (Azraq) - Biru" }
        ]
      },
      {
        title: "Istilah Penting",
        content: "Istilah-istilah lain yang sering digunakan.",
        subsections: [
          { title: "Waktu", content: "السَّاعَةُ (As-Saa'ah) - Jam | اليَوْمُ (Al-Yaum) - Hari | الأُسْبُوْعُ (Al-Usbuu') - Minggu" }
        ]
      },
      {
        title: "Bilangan Besar ( مِلْيُوْنٌ )",
        content: "Angka jutaan dalam bahasa Arab.",
        subsections: [
          { title: "Jutaan", content: "1.000.000: مِلْيُوْنٌ | 1.000.000.000: مِلْيَارٌ" }
        ]
      },
      {
        title: "Bilangan Ribuan ( الأَلْفُ )",
        content: "Angka ribuan dalam bahasa Arab.",
        subsections: [
          { title: "1.000 - 10.000", content: "1.000: أَلْفٌ | 2.000: أَلْفَانِ | 3.000: thalathatu aalaaf | 10.000: asyaratu aalaaf" }
        ]
      },
      {
        title: "Bilangan Ratusan ( المِائَةُ )",
        content: "Angka ratusan dalam bahasa Arab.",
        subsections: [
          { title: "100 - 900", content: "100: مِائَةٌ | 200: مِائَتَانِ | 300: ثَلَاثُ مِائَةٍ | 1000: أَلْفٌ" }
        ]
      },
      {
        title: "Bilangan Puluhan ( الأَعْدَادُ العَشْرِيَّةُ )",
        content: "Angka puluhan dalam bahasa Arab.",
        subsections: [
          { title: "20 - 90", content: "20: عِشْرُوْنَ | 30: ثَلَاثُوْنَ | 40: أَرْبَعُوْنَ | 50: خَمْسُوْنَ | 60: سِتُّوْنَ | 70: سَبْعُوْنَ | 80: ثَمَانُوْنَ | 90: تِسْعُوْنَ" }
        ]
      },
      {
        title: "Kosa Kata ( المُفْرَدَاتُ )",
        content: "Kumpulan kosa kata penting dalam kehidupan sehari-hari.",
        subsections: [
          { title: "Benda di Kelas", content: "قَلَمٌ (Qalam) - Pena | كِتَابٌ (Kitaab) - Buku | مِرْسَمَةٌ (Mirsamah) - Pensil | مِمْسَحَةٌ (Mim sa hah) - Penghapus" }
        ]
      },
      {
        title: "Bilangan Besar (Ribuan - Jutaan)",
        content: "Sistem bilangan untuk jumlah yang sangat besar hingga satu juta.",
        subsections: [
          { title: "Ribuan (1.000 - 9.000)", content: "1.000: أَلْفٌ (Alf) | 1.000.000: مِلْيُوْنٌ (Milyuun)" }
        ]
      }
    ]
  }
];
