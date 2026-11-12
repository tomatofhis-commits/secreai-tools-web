// 多言語テキスト辞書（絵文字なし・APIエンドポイント＆正式ストアリンク完備）
const translations = {
  ja: {
    // Navigation
    nav_secreai: "SecreAIとは",
    nav_prep: "事前準備",
    nav_basic: "基本設定",
    nav_api: "API一覧",
    nav_advanced: "詳細設定",
    nav_tools: "他ツール一覧",
    nav_contact: "お問い合わせ",
    
    // Hero
    hero_badge: "個人開発 × 生成AI 実用ツール集",
    hero_title: "作業の手を止めず、ワンボタンでAIを相棒に。",
    hero_subtitle: "日常のPC作業やゲーム、ライブ配信で「AIを便利に使う」ために生まれた実用ツール群です。<br><strong>設計：あまち</strong> ＆ <strong>コーディング：AI (Gemini)</strong> の共創により、すべてフリーで開発・公開しています。",
    hero_btn_secreai: "SecreAI の機能を見る",
    hero_btn_guide: "導入・使い方ガイド",

    // Featured (SecreAI Core Appeal)
    featured_badge: "Main Project",
    featured_title: "SecreAI - 画面を共有し、記憶を育てるAI秘書・相棒",
    featured_desc: "Elgato Stream Deck やショートカットキーからワンボタンで現在の画面をキャプチャ。作業やゲームの手を一切止めずに、Gemini や GPT、ローカルLLMへ即座に質問・対話できるデスクトップAIアシスタントです。",

    // 4 Pillars
    pillar1_title: "ワンボタン画面キャプチャ＆質問",
    pillar1_desc: "<strong>Elgato Stream Deck</strong>（HTTP API連携）やグローバルホットキー（<code>Ctrl+Alt+S</code>等）を押すだけで、ターゲット画面を瞬時にキャプチャしてAIに提示。スクリーンショットを撮って貼り付ける手間をゼロにし、作業やゲームの没入感を妨げません。",
    pillar2_title: "人間の記憶のような「多層記憶DB」",
    pillar2_desc: "会話を「短期・中期・長期」の3段階で管理し、<strong>ChromaDB（ベクトル検索＋キーワード検索）</strong>に蓄積。話せば話すほどあなたの好みや文脈・遊んでいるゲームの設定を記憶し、Good/Bad評価や自己学習辞書で賢い相棒へと成長します。",
    pillar3_title: "ローカルLLM活用でトークン大幅節約",
    pillar3_desc: "メイン対話は高性能なクラウドAI（Gemini / OpenAI）を使いつつ、<strong>記憶の要約整理・ネット検索結果の統合・事前判定（ゲートキーパーAI）</strong>をローカルLLM（Ollama / LM Studio）に任せることで、APIトークン消費とコストを劇的にカットします。",
    pillar4_title: "おまけ機能：高速RTトランスレーター",
    pillar4_desc: "画面内の英語や外国語テキストをOCR（WinRT / PaddleOCR）でリアルタイムに読み取り、ローカルLLM等で自然言語へ翻訳表示する<strong>RTトランスレーター</strong>を同梱。海外ゲームや英語ドキュメント読解の強力な手助けになります。",

    // Hub Showcase
    hub_title: "直感的なメインコントローラー（SecreAI Hub）",
    hub_desc: "すべての操作は洗練されたダークテーマの専用ハブ画面に集約。テキストチャットはもちろん、マイクを使った<strong>ボイスモード</strong>、画面を見せる<strong>ビジョンモード</strong>、AIの回答に対するフィードバック（Good / Bad / 修正）がワンクリックで行えます。",
    hub_p1: "<strong>ターゲットウィンドウ選択：</strong> 特定のゲームや作業アプリだけを指定してキャプチャ",
    hub_p2: "<strong>今日の前提条件：</strong> 「今日は〇〇のゲームをプレイ中」などその日の文脈をAIに事前共有",
    hub_p3: "<strong>VOICEVOX 連携：</strong> ずんだもん等の好きなキャラクターボイスでAIの回答をリアルタイム音声読み上げ",
    btn_github_secreai: "GitHub リポジトリを見る",
    btn_releases: "最新リリース（無料ダウンロード）",
    caption_click_enlarge: "※クリックで画像を拡大表示できます（言語切替で英語版UI画像に切り替わります）",

    // Preparation Section
    prep_badge: "PREPARATION : 導入前の事前準備",
    prep_title: "事前に用意するもの（APIキー＆連携ツール）",
    prep_desc: "SecreAI を動かすために必須となるクラウドAIのAPIキー取得先と、組み合わせて使うことで機能が大幅に広がる推奨ツール（無料）の公式リンク一覧です。",
    prep_req_group: "1. メインAI用 APIキー（いずれか必須）",
    prep_req_sub: "会話や画面認識（ビジョンモード）の頭脳となるAIエンジンです。まずは無料枠のある Gemini API キーの取得が最も手軽でおすすめです。",
    tag_required: "必須 / 推奨",
    prep_gemini_desc: "SecreAIのメインエンジンです。Googleアカウントがあれば「Google AI Studio」から数クリックでAPIキーを発行できます。",
    link_gemini: "Google AI Studio でAPIキーを取得する →",
    tag_choice: "選択可",
    prep_openai_desc: "GPTシリーズ（gpt-5.4-mini等）をメイン対話や記憶整理に使用したい場合に取得してください。",
    link_openai: "OpenAI Platform でAPIキーを取得する →",

    prep_opt_group: "2. あると便利な連携ツール・追加API（任意・無料）",
    prep_opt_sub: "後から必要に応じて追加できます。音声読み上げやトークン節約、リアルタイム翻訳を使う場合に導入してください。",
    tag_voice: "音声読み上げ",
    prep_voicevox_desc: "AIの返答を自然な日本語キャラクター音声（ずんだもん等）でリアルタイムに読み上げるための無料テキスト読み上げソフトウェアです。",
    link_voicevox: "VOICEVOX 公式サイトからダウンロード →",
    tag_local: "トークン節約・RT翻訳",
    prep_localllm_desc: "ご自身のPC（GPU）上でローカルAI（Gemma等）を動かすツールです。記憶DBの要約整理、検索結果の統合、RTトランスレーターをAPI費用ゼロで実行できます。",
    tag_search: "高精度Web検索",
    prep_tavily_desc: "AIがリアルタイムのネット検索を行うための検索特化APIです（月間1,000回まで無料枠あり）。Google Groundingと併用することで検索精度が向上します。",
    link_tavily: "Tavily 公式サイトでAPIキーを取得する →",

    // Basic Guide (Step 1)
    basic_badge: "STEP 1 : まずはここから（初心者・基本設定編）",
    basic_title: "まずは基本設定だけで使ってみよう",
    basic_desc: "SecreAIは多機能ですが、最初からすべての設定項目を触る必要はありません。<br><strong>「3つの基本ステップ」</strong>だけで、すぐにAIアシスタントとの対話を始められます。",
    b_step1_title: "初回ウィザード＆APIキー入力",
    b_step1_desc: "初回起動時は「セットアップウィザード」が自動で案内します。設定画面の<strong>「全般設定（General）」</strong>で、普段使いたいAI（Gemini / OpenAI / Local）を選び、事前準備で取得したAPIキーを入力するだけで準備完了です。",
    b_step2_title: "表示デザインと音声（VOICEVOX）の設定",
    b_step2_desc: "<strong>「View / Audio」</strong>タブで、字幕オーバーレイの透明度やフォントサイズ、入出力マイク・スピーカーを選択します。VOICEVOXを導入済みの場合はパスを指定すれば、好きな声でAIが応答します。",
    b_step3_title: "ワンボタン呼び出し（ホットキー / Stream Deck）",
    b_step3_desc: "<strong>「ホットキー」</strong>タブで「ビジョンモード開始（<code>Ctrl+Alt+S</code>等）」や「ボイスモード開始」のキーを設定。Elgato Stream Deck をお使いなら、ボタン1つで画面キャプチャ＋音声質問が発動します。",

    // API Endpoints Section
    api_badge: "INTEGRATION : 外部連携（Elgato Stream Deck等）",
    api_title: "HTTP API エンドポイント一覧",
    api_desc: "SecreAI は起動中にローカルWebサーバー（デフォルト: <code>localhost:5000</code> / <code>localhost:5001</code>）をバックグラウンドでホストしています。<br>Elgato Stream Deck の「Webサイト（バックグラウンドでアクセス）」アクションや外部マクロ、スクリプトから以下のURLへGETリクエストを送信するだけで、<strong>作業中のウィンドウフォーカスを一切奪わずに</strong>ワンタッチ制御が可能です。",
    th_feature: "機能 / 動作",
    th_endpoint: "HTTP エンドポイント URL",
    th_method: "方式",
    th_desc: "詳細説明",
    api_vision_title: "ビジョンモード（画面キャプチャ質問）",
    api_vision_desc: "現在のターゲット画面を瞬時にキャプチャし、AIへの質問受付を開始します。作業の手を止めないワンボタン操作のメイン機能です。",
    api_voice_title: "ボイスモード（音声対話）",
    api_voice_desc: "AIがマイクの音声入力待機状態に入り、音声で直接指示や質問が行えます。",
    api_stop_title: "おしゃべり即時停止",
    api_stop_desc: "AIの思考処理やVOICEVOXによる音声読み上げを即座に中断します。",
    api_good_title: "Good評価（ポジティブ学習）",
    api_good_desc: "直前のAIの回答を高く評価し、学習用ログに記録して振る舞いを強化します。",
    api_bad_title: "Bad評価（ネガティブ学習）",
    api_bad_desc: "直前の回答に不備や誤りがあったことを指摘し、AIの自己改善を促します。",
    api_fix_title: "履歴の修正マーク",
    api_fix_desc: "直前の回答に「修正要」フラグを付与し、後からの辞書登録や修正に役立てます。",
    api_clear_title: "会話リセット＆記憶同期",
    api_clear_desc: "現在の会話要点を長期記憶データベース（ChromaDB）に保存・同期した上で、直近の会話履歴を初期化します。",
    api_settings_title: "設定画面の表示",
    api_settings_desc: "SecreAI の詳細設定パネルを最前面に呼び出して表示します。",
    api_rtt_toggle_title: "RTトランスレーター 切替 (ポート5001)",
    api_rtt_toggle_desc: "画面翻訳（RTトランスレーター）の実行と停止をワンボタンでトグル切り替えします。",
    api_rtt_start_title: "RTT 翻訳開始 (ポート5000)",
    api_rtt_start_desc: "リアルタイム画面翻訳（OCRスキャン・翻訳ループ）を開始します。",
    api_rtt_stop_title: "RTT 翻訳停止 (ポート5000)",
    api_rtt_stop_desc: "リアルタイム画面翻訳を安全に停止します。",
    api_rtt_retrans_title: "RTT 翻訳リセット＆再スキャン",
    api_rtt_retrans_desc: "画面上の翻訳オーバーレイ表示を一度消去し、最新画面の強制再スキャンを実行します。",
    api_rtt_status_title: "RTT 稼働ステータス確認",
    api_rtt_status_desc: "RTトランスレータープロセスの稼働状態（実行中／停止中）をJSON形式で返答します。",
    api_ecomode_title: "RTT エコモード切替",
    api_ecomode_desc: "静止画面でのOCR頻度を抑える省電力・低負荷モードをON/OFFします。",

    // Advanced Guide (Step 2)
    adv_badge: "STEP 2 : もっと詳しく使いこなすには？（応用・詳細設定編）",
    adv_title: "目的に合わせて解放する5つの詳細設定ガイド",
    adv_desc: "基本操作に慣れてきたら、「もっと記憶を賢くしたい」「API料金を節約したい」「ゲームの専門用語を覚えさせたい」など、やりたいことに合わせて各設定タブを活用してください。",
    tab_btn_db: "記憶データベース",
    tab_btn_search: "Web検索＆トークン節約",
    tab_btn_dict: "辞書・知識の学習",
    tab_btn_rtt: "RTトランスレーター",
    tab_btn_ext: "外部連携・拡張機能",

    // Tab 1: DB
    db_tag: "目的：過去の会話を整理したい・要約コストを無料にしたい",
    db_title: "「データベース（ChromaDB）」タブ",
    db_desc: "SecreAIの最大の特徴である「長期記憶（ChromaDB）」を管理する設定です。会話の要点をバックグラウンドで自動抽出し、数千件以上の記憶から関連するエピソードを瞬時に思い出します。",
    db_p1: "<strong>記憶整理用AIモデルの分離：</strong> 記憶の要約・タグ付け処理にローカルLLM（<code>gemma-4-12b</code>等）を指定すれば、<strong>クラウドAPIのトークンを一切消費せずに</strong>高度な記憶整理が可能です。",
    db_p2: "<strong>会話意図による動的要約：</strong> 「これまでの話をまとめて」といった指示に合わせて、過去の記憶を時系列で動的抽出します。",
    db_p3: "<strong>記憶の一覧・管理ビューア：</strong> 保存された記憶の検索、不要な記憶の削除、タグの一括修復がGUIから簡単に行えます。",

    // Tab 2: Search
    search_tag: "目的：最新情報をAIに調べさせたい・検索要約のトークンを節約したい",
    search_title: "「Search（Web検索設定）」タブ",
    search_desc: "最新のニュースやゲームの攻略情報など、AI単体では知らない情報をリアルタイムにWeb検索（Google Grounding / Tavily API）して回答に組み込む設定です。",
    search_p1: "<strong>ハイブリッド統合要約：</strong> Google検索とTavily検索の結果を<strong>ローカルOllamaモデルで統合要約</strong>してからメインAIに渡すことで、長大なWebページによるトークン消費を劇的に抑えます。",
    search_p2: "<strong>月間プロンプト・回数の可視化：</strong> Google Grounding（月5,000回まで無料枠）やTavily（月1,000回まで無料枠）の今月の利用回数をひと目で確認でき、使いすぎを防げます。",

    // Tab 3: Dictionary
    dict_tag: "目的：ゲームの固有名詞や専門用語の音声認識ミスをなくしたい",
    dict_title: "「辞書 / 知識（Dictionary / Knowledge）」タブ",
    dict_desc: "マイク音声認識（STT）の誤変換を補正し、カードゲーム（MTG等）や専門分野の用語解説をAIの知識として自動補完する機能です。",
    dict_p1: "<strong>JSON辞書の個別ON/OFF：</strong> <code>dictionary/</code> フォルダ内の専門辞書（MTG全カード辞書など）とユーザー学習辞書（<code>USER_LEARNED.json</code>）をチェックボックスで即座に切り替え可能。",
    dict_p2: "<strong>登録用語の詳細補完：</strong> 会話の中に登録用語が登場した際、オラクルテキストや地名解説などをログとAIコンテキストに自動補完します。",
    dict_p3: "<strong>専用エディタ内蔵：</strong> 「学習辞書を添削・整理」ボタンから、AIが自動学習した単語の確認・編集がいつでも行えます。",

    // Tab 4: RTT
    rtt_tag: "目的：海外ゲームや英語アプリの画面をリアルタイム翻訳したい",
    rtt_title: "「RTトランスレーター」タブ",
    rtt_desc: "おまけ機能でありながら単体ソフト級の性能を持つリアルタイム画面OCR＆翻訳機能の詳細設定です。PCスペックやゲーム負荷に合わせて細かくチューニングできます。",
    rtt_p1: "<strong>ローカルLLM翻訳エンジン：</strong> ローカルモデルを指定することで、文字数制限やAPI課金を気にせず何時間でも連続翻訳が可能。",
    rtt_p2: "<strong>マルチGPU・リソース制限：</strong> 使用するGPUの指定、VRAMリミット（MB）、CPU使用率制限（25%〜100%）を設定でき、重い3Dゲーム中でもフレームレートを落としません。",
    rtt_p3: "<strong>ワンショット＆エコモード：</strong> 画面変化時のみ反応する感度調整や、1回だけスキャンするワンショット翻訳モードに対応。",

    // Tab 5: Extensions
    ext_tag: "目的：配信字幕ツールと連携したい・ローカルモデルを更新したい",
    ext_title: "「拡張機能（Extensions）」タブ",
    ext_desc: "外部ソフトウェアとのWebSocket連携や、ローカルLLM（Ollama / LM Studio）のモデルリスト同期を行う拡張設定です。",
    ext_p1: "<strong>ローカルLLMモデルリストのワンクリック取得：</strong> LM StudioやOllamaに新しいモデルを追加した際、ボタン1つでSecreAI内の全プルダウンメニューに最新モデル一覧を反映します。",
    ext_p2: "<strong>ローカルAI字幕システム連携（WebSocket）：</strong> <code>ws://localhost:8765</code> を通じて外部の字幕表示システム（SubtitLocar等）へリアルタイムにテキストを送信でき、配信画面の構築がさらに捗ります。",

    // Tools
    tools_title: "その他の公開ツール・プロジェクト一覧",
    tools_desc: "SecreAI と連携して使える字幕ツールや、ローカルLLMを活用したニュースリーダー、Chrome拡張機能などもすべて無料で公開しています。",
    tool_twa_desc: "ETS2 / ATS 向けの物理歩行追加プラグイン。専用ランチャーを起動するだけで自動セットアップが完了し、トラックから降りて緻密に作り込まれた街並みを自分の足で散策できます。ランチャー終了時にプラグインを自動消去する安全設計。",
    tool_subtitlocar_desc: "ローカルLLMを活用したリアルタイム字幕・音声テキスト変換ツール。SecreAIの拡張機能（WebSocket）とも連携可能で、配信や動画視聴のアクセシビリティを劇的に向上させます。",
    tool_mynewsreader_desc: "ローカルLLM（Ollama / LM Studio等）と連携するWindows向け自作RSSニュースリーダー。膨大なニュースフィードをAIが自動要約し、毎日の情報収集を効率化します。",
    chrome_yt_desc: "YouTubeのプレイリスト管理や自動再生・トラッキングを快適化するGoogle Chrome向け拡張機能。日々の動画視聴やライブ配信巡回をよりスマートにします。",
    chrome_4v_desc: "1つのブラウザタブ内で最大4つの動画（YouTube、ニコニコ動画、Vimeo等）を同時に並べて視聴できる4画面同時ビューア拡張機能。複数視点の配信追跡に最適です。",
    link_webstore: "Chrome ウェブストアで見る →",
    tool_detail_btn: "紹介ページを見る →",
    link_webstore_short: "Chrome ウェブストア",

    // Contact & Footer
    contact_title: "お問い合わせ・フィードバック",
    contact_desc: "バグ報告、機能の要望、感想などは GitHub Issues またはリポジトリまでお気軽にお寄せください。",
    footer_credits: "Designed by amachi / Coded by AI (Gemini)",
    footer_privacy: "プライバシーポリシー",
    footer_terms: "免責事項"
  },

  en: {
    // Navigation
    nav_secreai: "About SecreAI",
    nav_prep: "Prerequisites",
    nav_basic: "Basic Setup",
    nav_api: "API List",
    nav_advanced: "Advanced Guide",
    nav_tools: "Other Tools",
    nav_contact: "Contact",
    
    // Hero
    hero_badge: "Personal Project × Generative AI",
    hero_title: "Your One-Button AI Companion Without Stopping Your Workflow.",
    hero_subtitle: "A suite of practical utilities created to make AI effortlessly useful in daily PC work, gaming, and live streaming.<br>Co-created by <strong>Architect: amachi</strong> & <strong>Coding: AI (Gemini)</strong>, all free and open-source.",
    hero_btn_secreai: "Discover SecreAI",
    hero_btn_guide: "Setup & User Guide",

    // Featured (SecreAI Core Appeal)
    featured_badge: "Main Project",
    featured_title: "SecreAI - Screen-Sharing & Memory-Growing AI Assistant",
    featured_desc: "Capture your screen with a single button press via Elgato Stream Deck or hotkeys. Ask Gemini, GPT, or Local LLMs questions on the fly without ever interrupting your game or work.",

    // 4 Pillars
    pillar1_title: "One-Button Screen Capture & Ask",
    pillar1_desc: "Press a button on your <strong>Elgato Stream Deck</strong> (via HTTP API) or hit a global hotkey (e.g., <code>Ctrl+Alt+S</code>) to instantly show your target window to the AI. Zero manual screenshotting or copy-pasting.",
    pillar2_title: "Human-Like Multi-Layered Memory DB",
    pillar2_desc: "Manages conversations across Short, Mid, and Long-term tiers in <strong>ChromaDB (Vector + Keyword hybrid search)</strong>. Remembers your preferences, context, and game lore over time, growing smarter with Good/Bad feedback.",
    pillar3_title: "Huge Token Savings via Local LLMs",
    pillar3_desc: "Use powerful Cloud AI (Gemini / OpenAI) for main dialogue while offloading <strong>memory summarization, web search synthesis, and gatekeeper routing</strong> to free Local LLMs (Ollama / LM Studio) to drastically cut API token costs.",
    pillar4_title: "Bonus: High-Speed RT Translator",
    pillar4_desc: "Includes a built-in <strong>Real-Time Screen Translator</strong> using WinRT / PaddleOCR and Local LLMs. A great helper for reading foreign-language games and technical documentation on the fly.",

    // Hub Showcase
    hub_title: "Intuitive Main Controller (SecreAI Hub)",
    hub_desc: "All controls are unified in a sleek dark-themed Hub. Switch effortlessly between text chat, <strong>Voice Mode</strong> (mic input), <strong>Vision Mode</strong> (screen capture), and one-click AI response evaluation (Good / Bad / Fix).",
    hub_p1: "<strong>Target Window Selection:</strong> Capture only the specific game or application window you choose.",
    hub_p2: "<strong>Current Context:</strong> Tell the AI what you're doing today (e.g., 'Playing RPG X today') for spot-on answers.",
    hub_p3: "<strong>VOICEVOX Integration:</strong> Real-time text-to-speech playback with customizable character voices.",
    btn_github_secreai: "View GitHub Repository",
    btn_releases: "Latest Release (Free Download)",
    caption_click_enlarge: "* Click any image to enlarge (UI screenshots switch language automatically)",

    // Preparation Section
    prep_badge: "PREPARATION : Prerequisites & External Links",
    prep_title: "What You Need Before Starting (API Keys & Companion Tools)",
    prep_desc: "Official links to obtain required Cloud AI API keys and recommended free companion tools that unlock voice synthesis, token saving, and local translation.",
    prep_req_group: "1. Main AI API Key (Required - Choose One)",
    prep_req_sub: "The core brain for dialogue and screen vision. Starting with a Gemini API key (which offers a generous free tier) is the easiest and recommended option.",
    tag_required: "Required / Recommended",
    prep_gemini_desc: "SecreAI's primary engine. With a Google account, you can generate an API key in a few clicks from Google AI Studio.",
    link_gemini: "Get API Key on Google AI Studio →",
    tag_choice: "Optional Alternative",
    prep_openai_desc: "Obtain an OpenAI API key if you prefer using GPT models (such as gpt-5.4-mini) for main dialogue or memory management.",
    link_openai: "Get API Key on OpenAI Platform →",

    prep_opt_group: "2. Useful Companion Tools & Extra APIs (Optional & Free)",
    prep_opt_sub: "You can add these anytime later. Install them if you want character voice playback, zero-cost token saving, or real-time translation.",
    tag_voice: "Text-to-Speech",
    prep_voicevox_desc: "Free, high-quality Japanese text-to-speech software that lets the AI read responses aloud in expressive character voices.",
    link_voicevox: "Download from VOICEVOX Official Site →",
    tag_local: "Token Saving & RT Translation",
    prep_localllm_desc: "Run local AI models (like Gemma) on your own PC/GPU. Offload memory DB summarization, search synthesis, and RT translation at zero API cost.",
    tag_search: "Live Web Search",
    prep_tavily_desc: "Search API designed for AI agents (includes 1,000 free searches/month). Works alongside Google Grounding for accurate live web lookups.",
    link_tavily: "Get API Key on Tavily Official Site →",

    // Basic Guide (Step 1)
    basic_badge: "STEP 1 : Start Here (Beginner / Basic Setup)",
    basic_title: "Get Started Quickly with Just Basic Settings",
    basic_desc: "SecreAI is packed with features, but you don't need to touch complex menus to start.<br>Follow these <strong>3 simple steps</strong> to start talking with your AI assistant today.",
    b_step1_title: "Initial Wizard & API Key Setup",
    b_step1_desc: "On first launch, the Setup Wizard guides you step-by-step. In the <strong>General</strong> tab, simply select your preferred AI Provider (Gemini / OpenAI / Local) and paste your API key.",
    b_step2_title: "Display Style & Audio (VOICEVOX)",
    b_step2_desc: "In the <strong>View / Audio</strong> tab, adjust overlay opacity, font size, and select your mic & speaker devices. Set your VOICEVOX path to enable expressive voice responses.",
    b_step3_title: "One-Button Trigger (Hotkeys / Stream Deck)",
    b_step3_desc: "In the <strong>Hotkeys</strong> tab, bind keys for Vision Mode (<code>Ctrl+Alt+S</code>) and Voice Mode (<code>Ctrl+Alt+V</code>). Pair with Elgato Stream Deck for instant one-touch capture & ask.",

    // API Endpoints Section
    api_badge: "INTEGRATION : External Macro & Stream Deck Control",
    api_title: "HTTP API Endpoints Reference",
    api_desc: "While running, SecreAI hosts a lightweight local web server (defaults: <code>localhost:5000</code> / <code>localhost:5001</code>).<br>Triggering GET requests from Elgato Stream Deck ('Website - Access in background' action) or macros enables seamless control <strong>without ever losing focus on your active work window</strong>.",
    th_feature: "Action / Feature",
    th_endpoint: "HTTP Endpoint URL",
    th_method: "Method",
    th_desc: "Description",
    api_vision_title: "Vision Mode (Capture & Ask)",
    api_vision_desc: "Instantly captures the target screen and opens prompt listening. The primary one-button workflow.",
    api_voice_title: "Voice Mode (Mic Input)",
    api_voice_desc: "Puts the AI into microphone listening mode for voice dialogue.",
    api_stop_title: "Stop Speech & Reasoning",
    api_stop_desc: "Immediately halts active AI thinking and text-to-speech voice playback.",
    api_good_title: "Rate Good (Positive Feedback)",
    api_good_desc: "Positively scores the previous response to reinforce desired behavior.",
    api_bad_title: "Rate Bad (Negative Feedback)",
    api_bad_desc: "Flags errors in the previous answer for self-correction.",
    api_fix_title: "Mark for Revision",
    api_fix_desc: "Tags the previous answer with a 'Needs Fix' marker for subsequent refinement.",
    api_clear_title: "Clear Chat & Sync Memory",
    api_clear_desc: "Syncs current key topics into ChromaDB long-term memory, then clears the chat window history.",
    api_settings_title: "Open Settings Window",
    api_settings_desc: "Brings the SecreAI Advanced Settings panel to the foreground.",
    api_rtt_toggle_title: "Toggle RT Translator (Port 5001)",
    api_rtt_toggle_desc: "Toggles the Real-Time Screen Translation process ON and OFF.",
    api_rtt_start_title: "Start RTT (Port 5000)",
    api_rtt_start_desc: "Launches the real-time screen OCR and translation background loop.",
    api_rtt_stop_title: "Stop RTT (Port 5000)",
    api_rtt_stop_desc: "Safely terminates the real-time screen translation process.",
    api_rtt_retrans_title: "Reset & Re-scan RTT",
    api_rtt_retrans_desc: "Clears overlay text cards and forces an immediate screen re-scan.",
    api_rtt_status_title: "Query RTT Status",
    api_rtt_status_desc: "Returns running status (running/stopped) of the RTT process in JSON.",
    api_ecomode_title: "Toggle RTT Eco Mode",
    api_ecomode_desc: "Toggles the power-saving low-load mode that suppresses OCR during static screens.",

    // Advanced Guide (Step 2)
    adv_badge: "STEP 2 : Ready for More? (Power User / Advanced Guide)",
    adv_title: "5 Advanced Customization Tabs for Every Goal",
    adv_desc: "Once you're comfortable with the basics, explore these tabs whenever you want to optimize memory, save API tokens, or teach specialized game vocabulary.",
    tab_btn_db: "Memory Database",
    tab_btn_search: "Web Search & Token Saver",
    tab_btn_dict: "Dictionary & Knowledge",
    tab_btn_rtt: "RT Translator",
    tab_btn_ext: "Extensions & WebSockets",

    // Tab 1: DB
    db_tag: "Goal: Organize past conversations & zero-cost memory summarization",
    db_title: "Database (ChromaDB) Tab",
    db_desc: "Manage SecreAI's signature Long-Term Memory (ChromaDB). Key conversation points are automatically extracted in the background and recalled from thousands of entries.",
    db_p1: "<strong>Dedicated Memory AI Model:</strong> Assign a Local LLM (like <code>gemma-4-12b</code>) to handle memory summarization and tagging—<strong>consuming zero cloud API tokens</strong>.",
    db_p2: "<strong>Dynamic Intent Summarization:</strong> Automatically retrieves chronological memories when you ask the AI to 'summarize our progress so far'.",
    db_p3: "<strong>Built-in Memory Manager GUI:</strong> Inspect, search, delete, or batch-repair memory tags anytime.",

    // Tab 2: Search
    search_tag: "Goal: Give AI real-time internet access while saving prompt tokens",
    search_title: "Search (Web Search Settings) Tab",
    search_desc: "Let the AI look up breaking news, game walkthroughs, and live info using Google Grounding and Tavily API.",
    search_p1: "<strong>Hybrid Local Summarization:</strong> Synthesize and compress Google + Tavily search results using a <strong>Local Ollama model</strong> before sending to the main cloud AI, slashing token usage.",
    search_p2: "<strong>Monthly Quota Tracker:</strong> Monitor your monthly Google Grounding (5,000 free/mo) and Tavily (1,000 free/mo) usage right inside the UI.",

    // Tab 3: Dictionary
    dict_tag: "Goal: Fix voice recognition errors on game terms & proper nouns",
    dict_title: "Dictionary / Knowledge Tab",
    dict_desc: "Correct Speech-to-Text (STT) misrecognitions and automatically inject domain lore (such as MTG card oracle text) into the AI context.",
    dict_p1: "<strong>Per-File JSON Dictionaries:</strong> Toggle specialized dictionaries (e.g., full MTG card data) and self-learned user dictionaries (<code>USER_LEARNED.json</code>) on or off.",
    dict_p2: "<strong>Automatic Lore Completion:</strong> Displays detailed term definitions in the log and feeds them to the AI when recognized.",
    dict_p3: "<strong>Built-in Dictionary Editor:</strong> Review and refine auto-learned words with a single click.",

    // Tab 4: RTT
    rtt_tag: "Goal: Real-time OCR translation of foreign games & apps",
    rtt_title: "RT Translator Tab",
    rtt_desc: "Fine-tune the built-in Real-Time Screen OCR & Translation engine to match your PC hardware and game load.",
    rtt_p1: "<strong>Local LLM Translation Engine:</strong> Translate endlessly without API fees or character limits using local models.",
    rtt_p2: "<strong>Multi-GPU & Resource Limiter:</strong> Select which GPU to use, cap VRAM (MB), and limit CPU threads (25%–100%) to keep game FPS smooth.",
    rtt_p3: "<strong>One-Shot & Eco Modes:</strong> Adjust screen change sensitivity or scan once on demand.",

    // Tab 5: Extensions
    ext_tag: "Goal: Streaming subtitle integration & syncing local models",
    ext_title: "Extensions Tab",
    ext_desc: "Connect SecreAI to external broadcasting tools via WebSockets and refresh local LLM model lists.",
    ext_p1: "<strong>One-Click Local LLM List Sync:</strong> Fetch newly downloaded models from Ollama or LM Studio across all SecreAI dropdowns instantly.",
    ext_p2: "<strong>Subtitle System WebSocket (<code>ws://localhost:8765</code>):</strong> Broadcast AI text in real time to external subtitle overlays like SubtitLocar.",

    // Tools
    tools_title: "Other Open Source Tools & Projects",
    tools_desc: "Explore companion subtitle tools, local LLM news readers, and Chrome extensions—all released for free.",
    tool_twa_desc: "Physics-based free walk plugin for ETS2 & ATS. Just start the companion launcher for automatic setup, step out of your cab to explore finely detailed towns on foot, and close the launcher to auto-remove the plugin cleanly.",
    tool_subtitlocar_desc: "Real-time subtitle & speech-to-text tool powered by Local LLMs. Integrates seamlessly with SecreAI via WebSockets for live streaming.",
    tool_mynewsreader_desc: "Self-hosted Windows RSS news reader powered by Local LLMs (Ollama / LM Studio) that automatically summarizes daily news feeds.",
    chrome_yt_desc: "Google Chrome extension for automated YouTube playlist management and background tracking, streamlining video and livestream watching.",
    chrome_4v_desc: "Multi-screen viewer extension for watching up to four video streams (YouTube, NicoNico, Vimeo, etc.) simultaneously in a single browser tab.",
    link_webstore: "View on Chrome Web Store →",
    tool_detail_btn: "View Details →",
    link_webstore_short: "Chrome Web Store",

    // Contact & Footer
    contact_title: "Contact & Feedback",
    contact_desc: "For bug reports, feature requests, or feedback, please reach out via GitHub Issues or repositories.",
    footer_credits: "Designed by amachi / Coded by AI (Gemini)",
    footer_privacy: "Privacy Policy",
    footer_terms: "Disclaimer"
  }
};

// プライバシーポリシー＆免責事項コンテンツ
const modalTexts = {
  ja: {
    privacy_title: "プライバシーポリシー",
    privacy_body: `
      <h3>1. 個人情報の収集・利用について</h3>
      <p>当サイトでは、利用者の個人情報を不正に収集・保持することはありません。お問い合わせ等でいただいた情報は、回答およびご連絡の目的にのみ使用します。</p>
      
      <h3>2. 広告配信（Google AdSense）について</h3>
      <p>当サイトでは、第三者配信の広告サービス「Google AdSense」を利用しています。広告配信事業者は、利用者の興味に応じた広告を表示するためにCookie（クッキー）を使用することがあります。Cookieを無効にする設定およびGoogle AdSenseに関する詳細は、Googleの「<a href="https://policies.google.com/technologies/ads" target="_blank" rel="noopener">広告 – ポリシーと規約</a>」をご確認ください。</p>

      <h3>3. アクセス解析について</h3>
      <p>当サイトでは、サービス向上のためアクセス解析ツールを利用する場合があります。データは匿名で収集されており、個人を特定するものではありません。</p>
    `,
    terms_title: "免責事項",
    terms_body: `
      <h3>1. ソフトウェア・ツールの利用について</h3>
      <p>当サイトで紹介および配布しているすべてのツール・ソフトウェアは、現状有姿（AS IS）で提供されます。ツールの利用によって生じた直接的・間接的な損害（データ消失、PCの不具合、API利用料金の発生等）について、開発者は一切の責任を負いません。ご自身の責任においてご利用ください。</p>

      <h3>2. 掲載情報について</h3>
      <p>当サイトに掲載されている情報には万全を期していますが、その正確性や完全性を保証するものではありません。予告なしにコンテンツの変更やツールの公開停止を行う場合があります。</p>
    `
  },
  en: {
    privacy_title: "Privacy Policy",
    privacy_body: `
      <h3>1. Collection and Use of Personal Information</h3>
      <p>This website does not collect or retain personal identification information without your consent. Inquiries or correspondence will only be used for responding to your inquiries.</p>
      
      <h3>2. Advertising (Google AdSense)</h3>
      <p>This website uses "Google AdSense", a third-party advertising service. Ad vendors may use cookies to serve ads based on prior visits to this or other websites. You may opt out of personalized advertising by visiting Google's <a href="https://policies.google.com/technologies/ads" target="_blank" rel="noopener">Ads Settings</a>.</p>

      <h3>3. Analytics</h3>
      <p>Anonymous analytical cookies may be used to analyze traffic and improve user experience. No personal data is stored.</p>
    `,
    terms_title: "Disclaimer",
    terms_body: `
      <h3>1. Use of Software & Tools</h3>
      <p>All software and tools introduced on this website are provided "AS IS", without warranty of any kind. The author shall not be liable for any damages, losses, or API charges arising from the use or inability to use these tools. Please use them at your own risk.</p>

      <h3>2. Accuracy of Information</h3>
      <p>While every effort is made to provide accurate information, the author does not guarantee the completeness or validity of the content. Content and tool distributions are subject to change without notice.</p>
    `
  }
};

let currentLang = 'ja';

function updateLanguage(lang) {
  currentLang = lang;
  document.documentElement.lang = lang;
  try {
    localStorage.setItem('site_lang', lang);
  } catch (e) {}
  
  // 各要素のテキストを更新
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (translations[lang] && translations[lang][key]) {
      el.innerHTML = translations[lang][key];
    }
  });

  // 言語に応じたUIスクリーンショット画像の自動切り替え（日本語版 ⇄ 英語版）
  const mainHubImg = document.getElementById('img-main-hub');
  const generalImg = document.getElementById('img-basic-general');
  if (mainHubImg) {
    mainHubImg.src = lang === 'ja' ? 'image/SecreAIメイン.jpg' : 'image/SecreAImain.jpg';
  }
  if (generalImg) {
    generalImg.src = lang === 'ja' ? 'image/setting全般設定.jpg' : 'image/settingGeneal.jpg';
  }

  // YouTube Multi Auto Playlist 紹介ページのリンク切り替え（日本語版 ⇄ 英語版）
  const linkYtDetail = document.getElementById('link-yt-detail');
  if (linkYtDetail) {
    linkYtDetail.href = lang === 'ja' ? 'youtube-multi-auto-playlist.html' : 'youtube-multi-auto-playlist-en.html';
  }

  // 4 Screen Viewer 紹介ページのリンク切り替え（日本語版 ⇄ 英語版）
  const link4vDetail = document.getElementById('link-4v-detail');
  if (link4vDetail) {
    link4vDetail.href = lang === 'ja' ? '4-screen-viewer.html' : '4-screen-viewer-en.html';
  }

  // SubtitLocar 紹介ページのリンク切り替え（日本語版 ⇄ 英語版）
  const linkSubtitlocarDetail = document.getElementById('link-subtitlocar-detail');
  if (linkSubtitlocarDetail) {
    linkSubtitlocarDetail.href = lang === 'ja' ? 'subtitlocar.html' : 'subtitlocar-en.html';
  }

  // TruckerWalkAround 紹介ページのリンク切り替え（日本語版 ⇄ 英語版）
  const linkTwaDetail = document.getElementById('link-twa-detail');
  if (linkTwaDetail) {
    linkTwaDetail.href = lang === 'ja' ? 'trucker-walk-around.html' : 'trucker-walk-around-en.html';
  }

  // ボタンの表示テキストをトグル
  const langText = document.getElementById('current-lang-text');
  if (langText) {
    langText.textContent = lang === 'ja' ? 'English' : '日本語';
  }
}

// ページ初期化時の言語判定とlocalStorage同期
(function initLanguageSettings() {
  const pathname = window.location.pathname.toLowerCase();
  
  // 個別ツールの英語ページの場合
  if (pathname.includes('youtube-multi-auto-playlist-en') || 
      pathname.includes('4-screen-viewer-en') || 
      pathname.includes('subtitlocar-en') || 
      pathname.includes('trucker-walk-around-en')) {
    currentLang = 'en';
    try { localStorage.setItem('site_lang', 'en'); } catch(e) {}
    return;
  }
  
  // 個別ツールの日本語ページの場合
  if (pathname.includes('youtube-multi-auto-playlist') || 
      pathname.includes('4-screen-viewer') || 
      pathname.includes('subtitlocar') || 
      pathname.includes('trucker-walk-around')) {
    currentLang = 'ja';
    try { localStorage.setItem('site_lang', 'ja'); } catch(e) {}
    return;
  }
  
  // メインページ（index.html等）の場合、保存された言語設定があれば反映
  try {
    const savedLang = localStorage.getItem('site_lang');
    if (savedLang === 'en' || savedLang === 'ja') {
      updateLanguage(savedLang);
    }
  } catch (e) {}
})();

// 言語切り替えボタン
const langBtn = document.getElementById('lang-btn');
if (langBtn) {
  langBtn.addEventListener('click', () => {
    const pathname = window.location.pathname.toLowerCase();
    
    // YouTube Multi Auto Playlist
    if (pathname.includes('youtube-multi-auto-playlist-en')) {
      try { localStorage.setItem('site_lang', 'ja'); } catch(e) {}
      window.location.href = 'youtube-multi-auto-playlist.html';
      return;
    } else if (pathname.includes('youtube-multi-auto-playlist')) {
      try { localStorage.setItem('site_lang', 'en'); } catch(e) {}
      window.location.href = 'youtube-multi-auto-playlist-en.html';
      return;
    }
    
    // 4 Screen Viewer
    if (pathname.includes('4-screen-viewer-en')) {
      try { localStorage.setItem('site_lang', 'ja'); } catch(e) {}
      window.location.href = '4-screen-viewer.html';
      return;
    } else if (pathname.includes('4-screen-viewer')) {
      try { localStorage.setItem('site_lang', 'en'); } catch(e) {}
      window.location.href = '4-screen-viewer-en.html';
      return;
    }
    
    // SubtitLocar
    if (pathname.includes('subtitlocar-en')) {
      try { localStorage.setItem('site_lang', 'ja'); } catch(e) {}
      window.location.href = 'subtitlocar.html';
      return;
    } else if (pathname.includes('subtitlocar')) {
      try { localStorage.setItem('site_lang', 'en'); } catch(e) {}
      window.location.href = 'subtitlocar-en.html';
      return;
    }

    // TruckerWalkAround
    if (pathname.includes('trucker-walk-around-en')) {
      try { localStorage.setItem('site_lang', 'ja'); } catch(e) {}
      window.location.href = 'trucker-walk-around.html';
      return;
    } else if (pathname.includes('trucker-walk-around')) {
      try { localStorage.setItem('site_lang', 'en'); } catch(e) {}
      window.location.href = 'trucker-walk-around-en.html';
      return;
    }
    
    // メインページ
    const nextLang = currentLang === 'ja' ? 'en' : 'ja';
    updateLanguage(nextLang);
  });
}

// 詳細設定タブの切り替え機能
document.querySelectorAll('.adv-tab-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const targetId = btn.getAttribute('data-target');
    
    // ボタンのactive状態更新
    document.querySelectorAll('.adv-tab-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    // ペインの表示更新
    document.querySelectorAll('.adv-tab-pane').forEach(pane => {
      if (pane.id === targetId) {
        pane.classList.add('active');
      } else {
        pane.classList.remove('active');
      }
    });
  });
});

// 画像拡大ライトボックスモーダル
const imageModal = document.getElementById('image-modal');
const lightboxImg = document.getElementById('lightbox-img');
const lightboxCaption = document.getElementById('lightbox-caption');
const imageModalClose = document.getElementById('image-modal-close');

function openImageModal(src, alt) {
  if (!imageModal || !lightboxImg) return;
  lightboxImg.src = src;
  lightboxImg.alt = alt || '';
  if (lightboxCaption) {
    lightboxCaption.textContent = alt || '';
  }
  imageModal.style.display = 'block';
}

if (imageModalClose) {
  imageModalClose.addEventListener('click', () => {
    if (imageModal) imageModal.style.display = 'none';
  });
}

// プライバシーポリシー / 免責事項モーダル管理
const modal = document.getElementById('modal');
const modalBody = document.getElementById('modal-body');
const modalClose = document.getElementById('modal-close');

function openModal(title, content) {
  if (!modal || !modalBody) return;
  modalBody.innerHTML = `<h2>${title}</h2>${content}`;
  modal.style.display = 'block';
}

const openPrivacy = document.getElementById('open-privacy');
if (openPrivacy) {
  openPrivacy.addEventListener('click', (e) => {
    e.preventDefault();
    const text = modalTexts[currentLang];
    openModal(text.privacy_title, text.privacy_body);
  });
}

const openTerms = document.getElementById('open-terms');
if (openTerms) {
  openTerms.addEventListener('click', (e) => {
    e.preventDefault();
    const text = modalTexts[currentLang];
    openModal(text.terms_title, text.terms_body);
  });
}

if (modalClose) {
  modalClose.addEventListener('click', () => {
    if (modal) modal.style.display = 'none';
  });
}

window.addEventListener('click', (e) => {
  if (modal && e.target === modal) {
    modal.style.display = 'none';
  }
  if (imageModal && e.target === imageModal) {
    imageModal.style.display = 'none';
  }
});
