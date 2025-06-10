// FAQ Data Structure
const faqData = {
    categories: [
        {
            id: 'order',
            title: 'ご注文について',
            options: [
                {
                    id: 'payment-methods',
                    question: '利用できる決済手段を教えてください。',
                    answer: `ご利用可能な決済方法は以下の通りです：\n\n• クレジットカード\n  - VISA、MasterCard、Amex\n  - JCB、Diners\n\n• コンビニ決済\n  - ファミマ、ローソン\n  - ミニストップ、デイリー\n\n• キャリア決済\n  - ドコモ、au、ソフトバンク\n\n• スマホ決済\n  - PayPay、メルPay\n\n• その他\n  - 楽天ペイ\n  - 後払い（NP後払い、Paidy）\n  - Google Pay、Apple Pay\n  - PayPal、Alipay、WeChat Pay`
                },
                {
                    id: 'change-payment',
                    question: '支払方法を変更したいです。',
                    answer: 'ご注文確定後のお支払方法の変更はできません。\n\nご注文前に必ずご確認ください。'
                },
                {
                    id: 'order-confirmation',
                    question: '注文内容はどこで確認できますか？',
                    answer: 'マイアカウントの「ご注文履歴」よりご確認いただけます。'
                },
                {
                    id: 'no-confirmation-email',
                    question: '注文後メールが届きません。',
                    answer: '以下の点をご確認ください：\n\n• メールアドレスの入力ミス\n• 迷惑メール設定\n\n「@anime-store.jp」からのメールを受信可能に設定してください。'
                }
            ]
        },
        {
            id: 'delivery',
            title: '配送について',
            options: [
                {
                    id: 'not-arrived',
                    question: '商品が届きません。',
                    answer: '予約商品は発売まで数ヶ月かかることがあります。\n\n商品ページの発売時期をご確認ください。'
                },
                {
                    id: 'delayed-release',
                    question: '発売日を過ぎても届きません。',
                    answer: '以下の点についてご了承ください：\n\n• メーカー都合により発売が遅れることがあります\n• 発売遅延によるキャンセルはできません'
                },
                {
                    id: 'combine-orders',
                    question: '注文をまとめられますか？',
                    answer: '申し訳ございませんが、別々にご注文された商品を一括配送することはできません。'
                },
                {
                    id: 'partial-shipping',
                    question: '発売済商品のみ先に発送してもらえますか？',
                    answer: '申し訳ございませんが、以下の通りとなります：\n\n• 全商品が揃い次第の一括発送\n• 分割発送は対応不可'
                }
            ]
        },
        {
            id: 'shipping',
            title: '配送・送料について',
            options: [
                {
                    id: 'delivery-time',
                    question: '配送日時指定できますか？',
                    answer: '申し訳ございませんが、日時指定は承っておりません。\n\n予めご了承ください。'
                },
                {
                    id: 'shipping-cost',
                    question: '送料はいくらですか？',
                    answer: '送料は以下の通りです：\n\n• 全国一律：550円\n• 沖縄・離島：1,210円'
                },
                {
                    id: 'free-shipping',
                    question: '送料無料ラインはありますか？',
                    answer: '以下の条件で送料無料となります：\n\n• 1回のご注文が5,500円（税込）以上\n• 沖縄・離島は対象外'
                },
                {
                    id: 'shipping-company',
                    question: '配送業者や方法は選べますか？',
                    answer: '配送について：\n\n• 配送業者\n  - ヤマト運輸\n  - 佐川急便\n\n※配送方法の指定はできません'
                }
            ]
        },
        {
            id: 'returns',
            title: '返品・キャンセルについて',
            options: [
                {
                    id: 'cancel-order',
                    question: '商品をキャンセルしたいです。',
                    answer: 'キャンセルについて：\n\n• 予約受付期間内：キャンセル可能\n• 予約受付期間後：キャンセル不可\n\n※予めご注意ください'
                },
                {
                    id: 'return-exchange',
                    question: '商品を返品・交換したいです。',
                    answer: '返品・交換について：\n\n• お客様都合：原則として不可\n• 不良品・誤送：到着後7日以内にご連絡\n\nご不明な点はカスタマーサポートまでお問い合わせください。'
                },
                {
                    id: 'refund-method',
                    question: 'キャンセル時の返金方法は？',
                    answer: '返金方法は決済方法により異なります：\n\n• クレジットカード：カード会社経由で返金\n• コンビニ払い：銀行振込\n  ※手数料550円を差し引かせていただきます'
                }
            ]
        },
        {
            id: 'account',
            title: '会員登録・アカウント',
            options: [
                {
                    id: 'account-deletion',
                    question: 'アカウント退会方法を教えてください。',
                    answer: '退会手続きについて：\n\n1. お問い合わせフォームよりご連絡\n2. 担当者が確認\n3. 退会処理を実施\n\n※処理完了後、メールにてご連絡いたします'
                },
                {
                    id: 'newsletter',
                    question: 'メルマガの配信を停止したいです。',
                    answer: '配信停止の方法：\n\n1. メール下部の「配信停止リンク」をクリック\n2. 停止確認ページで「停止する」を選択\n\n※再開をご希望の場合は、マイページより設定可能です'
                }
            ]
        }
    ]
};

// Wait for DOM to be ready
document.addEventListener('DOMContentLoaded', () => {
    console.log('🤖 Anime Store FAQ Chatbot: Script loaded');
    initializeChatbot();
});

function initializeChatbot() {
    // Create HTML structure if it doesn't exist
    let container = document.getElementById('chatbot-container');
    if (!container) {
        console.log('🤖 Anime Store FAQ Chatbot: No container found, creating one');
        container = document.createElement('div');
        container.id = 'chatbot-container';
        document.body.appendChild(container);
    }

    // Create chatbot structure
    container.innerHTML = `
        <button id="chatbot-toggle" class="chatbot-toggle">
            <span class="open-text">💬</span>
            <span class="close-text">✕</span>
        </button>
        <div id="chatbot" style="display: none">
            <div class="chatbot-header">
                <h3>アニメストアFAQ</h3>
                <button id="restart-button" style="display: none">リセット</button>
            </div>
            <div id="chat-messages"></div>
            <div id="chat-options"></div>
        </div>
        <template id="message-template">
            <div class="message">
                <div class="message-content"></div>
            </div>
        </template>
        <template id="options-template">
            <button class="option"></button>
        </template>
    `;

    // Initialize chatbot
    console.log('🤖 Anime Store FAQ Chatbot: Initializing chatbot interface');
    const chatbot = new ChatBot();
    
    // Setup toggle button functionality
    const toggleButton = document.getElementById('chatbot-toggle');
    const chatbotElement = document.getElementById('chatbot');
    
    toggleButton.addEventListener('click', () => {
        const isVisible = chatbotElement.style.display !== 'none';
        chatbotElement.style.display = isVisible ? 'none' : 'flex';
        toggleButton.classList.toggle('active', !isVisible);
        
        // If opening the chatbot and no messages yet, show welcome message
        if (!isVisible && chatbot.messagesContainer.children.length === 0) {
            chatbot.showWelcomeMessage();
        }
    });
}

class ChatBot {
    constructor() {
        this.messagesContainer = document.getElementById('chat-messages');
        this.optionsContainer = document.getElementById('chat-options');
        this.restartButton = document.getElementById('restart-button');
        this.messageTemplate = document.getElementById('message-template');
        this.optionsTemplate = document.getElementById('options-template');
        this.currentPath = [];
        
        this.init();
        this.setupRestartButton();
    }

    init() {
        this.showWelcomeMessage();
    }

    showWelcomeMessage() {
        this.addMessage('アニメストアFAQへようこそ。以下のカテゴリーからお選びください。', false, this.getMainCategories());
    }

    getMainCategories() {
        return faqData.categories.map(category => ({
            id: category.id,
            text: category.title
        }));
    }

    setupRestartButton() {
        this.restartButton.addEventListener('click', () => {
            this.currentPath = [];
            this.clearChat();
            this.showWelcomeMessage();
            this.restartButton.style.display = 'none';
        });
    }

    clearChat() {
        this.messagesContainer.innerHTML = '';
    }

    createFeedbackButtons() {
        return [
            {
                text: '✅ 解決した',
                value: 'resolved',
                class: 'success',
                isFeedback: true
            },
            {
                text: '❌ 解決しなかった',
                value: 'unresolved',
                class: 'error',
                isFeedback: true
            }
        ];
    }

    addMessage(text, isUser = false, options = null) {
        const messageNode = this.messageTemplate.content.cloneNode(true);
        const messageDiv = messageNode.querySelector('.message');
        const messageContent = messageNode.querySelector('.message-content');
        
        if (isUser) {
            messageDiv.classList.add('user');
        }
        
        messageContent.textContent = text;

        if (options) {
            const optionsGroup = document.createElement('div');
            optionsGroup.className = 'options-group';
            
            options.forEach(option => {
                const button = document.createElement('button');
                button.className = option.class ? `option-button ${option.class}` : 'option-button';
                button.textContent = option.text || option.question;
                
                if (option.isFeedback) {
                    button.onclick = () => {
                        // Disable all feedback buttons in this group
                        optionsGroup.querySelectorAll('button').forEach(btn => {
                            btn.disabled = true;
                            btn.classList.add('disabled');
                        });
                        console.log('Feedback button clicked:', option.value);
                        this.handleFeedback(option.value);
                    };
                } else {
                    button.onclick = () => {
                        // Disable all option buttons in this group
                        optionsGroup.querySelectorAll('button').forEach(btn => {
                            btn.disabled = true;
                            btn.classList.add('disabled');
                        });
                        console.log('Option button clicked:', option);
                        this.handleOptionClick(option);
                    };
                }
                
                optionsGroup.appendChild(button);
            });
            
            messageContent.appendChild(optionsGroup);
        }

        this.messagesContainer.appendChild(messageNode);
        this.scrollToBottom();

        // Disable all previous option groups when adding new options
        if (options) {
            const allOptionGroups = this.messagesContainer.querySelectorAll('.options-group');
            const previousGroups = Array.from(allOptionGroups).slice(0, -1); // All except the last (current) group
            previousGroups.forEach(group => {
                group.querySelectorAll('button').forEach(button => {
                    button.disabled = true;
                    button.classList.add('disabled');
                });
            });
        }
    }

    handleOptionClick(option) {
        console.log('handleOptionClick called with:', option);
        // Add user's selection as a message
        this.addMessage(option.text || option.question, true);
        
        // Add a small delay before showing the response
        setTimeout(() => {
            if (option.answer) {
                this.addMessage(option.answer, false);
                setTimeout(() => {
                    const feedbackOptions = [
                        {
                            text: '✅ 解決した',
                            value: 'resolved',
                            class: 'success',
                            isFeedback: true
                        },
                        {
                            text: '❌ 解決しなかった',
                            value: 'unresolved',
                            class: 'error',
                            isFeedback: true
                        }
                    ];
                    console.log('Adding feedback options. Current path:', this.currentPath);
                    this.addMessage('この回答は問題を解決しましたか？', false, feedbackOptions);
                }, 500);
                this.restartButton.style.display = 'inline-block';
            } else {
                const category = faqData.categories.find(c => c.id === option.id);
                if (category) {
                    this.addMessage(category.title + 'について、以下からお選びください：', false, category.options);
                }
            }
        }, 500);

        this.currentPath.push(option);
    }

    async handleFeedback(feedback) {
        console.log('handleFeedback called with:', feedback);
        const feedbackText = feedback === 'resolved' ? '✅ 解決した' : '❌ 解決しなかった';
        
        // Add user's feedback as a message
        this.addMessage(feedbackText, true);

        // Build and log the complete conversation path
        const path = this.buildPath();
        path.feedback = feedbackText;
        
        console.log('Complete conversation path:', path);
        await this.logFeedback(path);

        // Add a small delay before showing the response
        await new Promise(resolve => setTimeout(resolve, 500));
        
        // Show appropriate response based on feedback
        if (feedback === 'resolved') {
            this.addMessage('解決できて良かったです！他にご質問はありますか？', false, this.getMainCategories());
        } else {
            this.addMessage('申し訳ありません。もう一度サポートさせてください。どのご質問でしょうか？', false, this.getMainCategories());
        }
    }

    buildPath() {
        // Create the path object with the full conversation history
        const path = {
            timestamp: new Date(new Date().getTime() + (9 * 60 * 60 * 1000)).toISOString(), // Convert to JST
            q1_category: null,
            q2_topic: null,
            q3_subtopic: null,
            q4_question: null,
            feedback: null
        };

        // Map the conversation path to the appropriate fields
        this.currentPath.forEach((item, index) => {
            if (index === 0) {
                path.q1_category = item.title || item.text;
            } else {
                // For questions, store the actual question text
                const questionText = item.question || item.text;
                if (!path.q2_topic) {
                    path.q2_topic = questionText;
                } else if (!path.q3_subtopic) {
                    path.q3_subtopic = questionText;
                } else if (!path.q4_question) {
                    path.q4_question = questionText;
                }
            }
        });

        return path;
    }

    async logFeedback(path) {
        console.log('Attempting to log feedback to Google Sheets:', path);
        
        try {
            // Format data exactly as specified
            const data = {
                q1: path.q1_category || '',
                q2: path.q2_topic || '',
                q3: path.q3_subtopic || '',
                q4: path.q4_question || '',
                feedback: path.feedback || ''
            };

            console.log('Sending data to Google Sheets:', data);

            // Convert data to form-encoded format
            const formData = new URLSearchParams();
            Object.keys(data).forEach(key => {
                formData.append(key, data[key]);
            });

            const response = await fetch('https://script.google.com/macros/s/AKfycbwlf7eIBAlhfICfvoXRiaoPMK0q2-Q3PeLnk_BzRlgZEdKXD-8O0efUknhg3NZJyLgE/exec', {
                method: 'POST',
                mode: 'no-cors',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: formData.toString()
            });

            console.log('Feedback logged successfully');
            
        } catch (error) {
            console.error('Error logging to Google Sheets:', error);
        }
    }

    scrollToBottom() {
        this.messagesContainer.scrollTop = this.messagesContainer.scrollHeight;
    }
} 