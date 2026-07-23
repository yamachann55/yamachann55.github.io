document.addEventListener("DOMContentLoaded", () => {
  // 現在の言語状態（初期状態は localStorage または 'en'）
  let currentLang = localStorage.getItem("site_lang") || "en";

  const langBtnEn = document.getElementById("lang-en");
  const langBtnJa = document.getElementById("lang-ja");
  const portfolioGrid = document.getElementById("portfolio-grid");
  const galleryGrid = document.getElementById("gallery-grid");
  const copyEmailBtn = document.getElementById("copy-email-btn");
  const copyFeedback = document.getElementById("copy-feedback");
  const emailTextElem = document.getElementById("email-address-text");
  const emailMailtoElem = document.getElementById("email-mailto-link");

  // モーダル要素
  const imageModal = document.getElementById("image-modal");
  const modalImg = document.getElementById("modal-img");
  const modalCaption = document.getElementById("modal-caption");
  const modalClose = document.querySelector(".modal-close");

  // メールアドレス・リンクの自動同期
  if (emailTextElem) {
    emailTextElem.textContent = SITE_DATA.contactEmail;
  }
  if (emailMailtoElem) {
    emailMailtoElem.href = `mailto:${SITE_DATA.contactEmail}`;
  }

  // 1. 言語切り替え処理
  function setLanguage(lang) {
    currentLang = lang;
    localStorage.setItem("site_lang", lang);

    // ボタンアクティブ状態の更新
    if (lang === "ja") {
      langBtnJa.classList.add("active");
      langBtnEn.classList.remove("active");
      document.documentElement.lang = "ja";
    } else {
      langBtnEn.classList.add("active");
      langBtnJa.classList.remove("active");
      document.documentElement.lang = "en";
    }

    // サイト内の固定テキスト置換
    const texts = SITE_DATA.i18n[lang];
    document.querySelectorAll("[data-i18n]").forEach((elem) => {
      const key = elem.getAttribute("data-i18n");
      if (texts[key]) {
        elem.textContent = texts[key];
      }
    });

    // ページタイトルの更新
    document.title = texts.siteTitle;

    // 動的コンテンツの再描画
    renderPortfolio();
    renderGallery();
  }

  // 2. ポートフォリオカードの動的生成
  function renderPortfolio() {
    if (!portfolioGrid) return;
    portfolioGrid.innerHTML = "";

    SITE_DATA.portfolio.forEach((item) => {
      const title = item.title[currentLang] || item.title.en;
      const desc = item.description[currentLang] || item.description.en;

      const card = document.createElement("article");
      card.className = "portfolio-card";

      const tagsHtml = item.tags
        ? item.tags.map((tag) => `<span class="card-tag">${tag}</span>`).join("")
        : "";

      card.innerHTML = `
        <div class="card-image-wrapper">
          <img src="${item.image}" alt="${title}" loading="lazy">
          <div class="card-image-overlay"></div>
        </div>
        <div class="card-body">
          <div class="card-tags">${tagsHtml}</div>
          <h3 class="card-title">${title}</h3>
          <p class="card-desc">${desc}</p>
        </div>
      `;

      portfolioGrid.appendChild(card);
    });
  }

  // 3. 写真ギャラリーの動的生成
  function renderGallery() {
    if (!galleryGrid) return;
    galleryGrid.innerHTML = "";

    if (!SITE_DATA.gallery || SITE_DATA.gallery.length === 0) return;

    SITE_DATA.gallery.forEach((item) => {
      const captionText = item.caption
        ? (item.caption[currentLang] || item.caption.en || "")
        : "";

      const galleryItem = document.createElement("div");
      galleryItem.className = "gallery-item";

      galleryItem.innerHTML = `
        <img src="${item.image}" alt="${captionText}" loading="lazy">
        <div class="gallery-item-overlay">
          <span class="gallery-caption">${captionText}</span>
        </div>
      `;

      // クリックで大画面プレビューモーダルを開く
      galleryItem.addEventListener("click", () => {
        openModal(item.image, captionText);
      });

      galleryGrid.appendChild(galleryItem);
    });
  }

  // 4. 画像拡大モーダル関数
  function openModal(src, caption) {
    if (!imageModal || !modalImg) return;
    modalImg.src = src;
    modalCaption.textContent = caption || "";
    imageModal.classList.add("show");
  }

  function closeModal() {
    if (!imageModal) return;
    imageModal.classList.remove("show");
  }

  if (modalClose) {
    modalClose.addEventListener("click", closeModal);
  }
  if (imageModal) {
    imageModal.addEventListener("click", (e) => {
      if (e.target === imageModal) closeModal();
    });
  }

  // 5. イベントリスナー登録
  if (langBtnEn) {
    langBtnEn.addEventListener("click", () => setLanguage("en"));
  }
  if (langBtnJa) {
    langBtnJa.addEventListener("click", () => setLanguage("ja"));
  }

  // 6. メールアドレスコピー機能
  if (copyEmailBtn) {
    copyEmailBtn.addEventListener("click", async () => {
      try {
        await navigator.clipboard.writeText(SITE_DATA.contactEmail);
        const notice = SITE_DATA.i18n[currentLang].copiedNotice || "Copied!";
        copyFeedback.textContent = notice;
        copyFeedback.classList.add("show");

        setTimeout(() => {
          copyFeedback.classList.remove("show");
        }, 2500);
      } catch (err) {
        console.error("Failed to copy text: ", err);
      }
    });
  }

  // 初期化実行
  setLanguage(currentLang);
});
