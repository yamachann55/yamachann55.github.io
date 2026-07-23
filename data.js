/**
 * =================================================================
 * 🎮 YAMACHANN STUDIO - Portfolio & Site Data Config
 * =================================================================
 * ここを編集するだけで、ポートフォリオの画像、タイトル、説明文、
 * 日英テキスト、連絡先、SNSリンク、写真ギャラリーなどを簡単に更新できます！
 */

const SITE_DATA = {
  // ---------------------------------------------------------------
  // 1. スタジオ＆ヘッダー＆コンタクト情報
  // ---------------------------------------------------------------
  brandName: "YAMACHANN STUDIO",
  headerBanner: "assets/header-banner.png",
  contactEmail: "yamachan.contact@gmail.com",
  xTwitterUrl: "https://x.com/Yamachann5555",
  xTwitterHandle: "@Yamachann5555",

  // ---------------------------------------------------------------
  // 2. サイト内テキスト（日本語 / 英語）
  // ---------------------------------------------------------------
  i18n: {
    en: {
      siteTitle: "YAMACHANN STUDIO - Unity Asset Developer",
      tagline: "High-Quality Japanese 3D Assets for Unity — Upcoming Releases & Preview",
      badgeText: "UNITY PUBLISHER - IN DEVELOPMENT",
      aboutTitle: "About Us",
      aboutSubtitle: "Crafting Authentic Japanese 3D Assets — Coming Soon to Unity Asset Store!",
      aboutDescription: "Welcome! We are currently developing a wide range of ultra-realistic, high-fidelity Japanese 3D asset packs for Unity—from street props and modern architecture to detailed urban environment kits. Our packages are designed from the ground up for real-time performance and seamless integration. New releases are coming thick and fast, so stay tuned for upcoming Unity Asset Store launches!",
      portfolioTitle: "Portfolio & Works in Progress",
      portfolioDesc: "Here is an early sneak peek of 3D models currently in active development. Packages are launching very soon on the Unity Asset Store!",
      galleryTitle: "Asset Snapshot Gallery",
      galleryDesc: "A visual collection of high-resolution renders, materials, and development snapshots.",
      contactTitle: "Contact & Support",
      contactDesc: "For inquiries, feedback, or custom requests, feel free to contact via email:",
      socialTitle: "Official X (Twitter)",
      socialDesc: "Connect with us on X for direct messages and studio updates:",
      sendEmail: "Send Email",
      copyEmail: "Copy Email",
      copiedNotice: "Email Copied!",
      followOnX: "Follow on X",
      footerRights: "All rights reserved."
    },
    ja: {
      siteTitle: "YAMACHANN STUDIO - Unityアセットデベロッパー",
      tagline: "Unity向け高品質3Dアセット制作中！これから続々リリース予定！",
      badgeText: "UNITY パブリッシャー準備中",
      aboutTitle: "About Us",
      aboutSubtitle: "日本のリアルな質感と透明感を届けるアセット開発、本格始動！",
      aboutDescription: "ご覧いただきありがとうございます！現在、Unity向けに日本のリアルな街並みプロップや近代建築、空気感あふれる都市環境3Dアセットを精力的に開発しています。すべてのモデルは実用性と軽量化を突き詰めて制作中。これからUnity Asset Storeでアセットをじゃんじゃん配信していきますので、ぜひご期待ください！",
      portfolioTitle: "Portfolio & Works in Progress",
      portfolioDesc: "現在絶賛制作中・先行開発中の3Dモデル＆環境アセットのプレビューです。Unity Asset Storeにて近日より順次リリース開始！",
      galleryTitle: "アセット ギャラリー",
      galleryDesc: "レンダリング画像やアセットスナップショットの画像ギャラリーです。",
      contactTitle: "Contact & Support",
      contactDesc: "制作のご相談やお問い合せは、メールよりお気軽にどうぞ！",
      socialTitle: "Official X (Twitter)",
      socialDesc: "X（旧Twitter）アカウントはこちら！ダイレクトメッセージもお気軽にどうぞ！",
      sendEmail: "メールを送信",
      copyEmail: "アドレスをコピー",
      copiedNotice: "コピーしました！",
      followOnX: "X (Twitter) をフォロー",
      footerRights: "All rights reserved."
    }
  },

  // ---------------------------------------------------------------
  // 3. ポートフォリオ作品リスト（簡単に増減・編集可能）
  // ---------------------------------------------------------------
  portfolio: [
    {
      id: "japanese-props",
      image: "assets/portfolio-props.jpg",
      tags: ["3D Props", "In Progress", "Japan Street"],
      title: {
        en: "Japanese Street Props Pack (Coming Soon)",
        ja: "リアル日本街頭プロップ集（制作中）"
      },
      description: {
        en: "Photorealistic 3D models of modern Japanese street elements including traffic lights, vending machines, and signage. Optimized for PBR materials and real-time performance.",
        ja: "信号機、自動販売機、街頭標識など日本の街並みを構成するリアル調3Dプロップセット。PBRマテリアルおよび軽量化を追求して先行開発中。"
      }
    },
    {
      id: "architecture-modular",
      image: "assets/portfolio-arch.jpg",
      tags: ["Architecture", "Modular", "In Progress"],
      title: {
        en: "Modern Japanese Architecture (Coming Soon)",
        ja: "近代日本建築モジュール（制作中）"
      },
      description: {
        en: "Modular architectural kits capturing the sharp, translucent aesthetic of modern concrete and glass structures. Ideal for modern urban Unity scenes.",
        ja: "コンクリートとガラスの透明感・キレのあるデザインを再現したモジュール建築キット。近代的都市ステージ構築に向けて準備中。"
      }
    },
    {
      id: "environment-details",
      image: "assets/portfolio-env.jpg",
      tags: ["Environment", "Atmospheric", "In Progress"],
      title: {
        en: "Urban Environment Details & Props (Coming Soon)",
        ja: "都市環境ディテール＆背景小物（制作中）"
      },
      description: {
        en: "High-fidelity background props, utility poles, electrical cables, and authentic street side props designed to bring realistic depth to urban scenes.",
        ja: "電柱、電線、路地裏の小物など、画面の空気感とリアリティを一段引き上げる高品質な日本都市背景3Dアセットセット。順次公開予定。"
      }
    }
  ],

  // ---------------------------------------------------------------
  // 4. 写真ギャラリー（後から配列に画像を足すだけで自動追加！）
  // ---------------------------------------------------------------
  gallery: [
    {
      image: "assets/header-banner.png",
      caption: {
        en: "Japanese Station",
        ja: "大阪梅田駅 ラージマン広場"
      }
    },
  ]
};
