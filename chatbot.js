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
                    answer: `ご利用可能な決済方法は以下の通りです：
                        クレジットカード（VISA、MasterCard、Amex、JCB、Diners）、
                        コンビニ決済（ファミマ、ローソン、ミニストップ、デイリー）、
                        キャリア決済（ドコモ、au、ソフトバンク）、
                        スマホ決済（PayPay、メルPay）、
                        楽天ペイ、後払い（NP後払い、Paidy）、
                        その他：Google Pay、Apple Pay、PayPal、Alipay、WeChat Pay など。`
                },
                {
                    id: 'change-payment',
                    question: '支払方法を変更したいです。',
                    answer: 'ご注文確定後のお支払方法の変更はできません。ご注文前に必ずご確認ください。'
                },
                {
                    id: 'order-confirmation',
                    question: '注文内容はどこで確認できますか？',
                    answer: 'マイアカウントの「ご注文履歴」よりご確認いただけます。'
                },
                {
                    id: 'no-confirmation-email',
                    question: '注文後メールが届きません。',
                    answer: 'ご登録メールアドレスの入力ミス、または迷惑メール設定が原因で届かない場合があります。「@anime-store.jp」からのメールを受信可能に設定してください。'
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
                    answer: '予約商品は発売まで数ヶ月かかることがあります。商品ページの発売時期をご確認ください。'
                },
                {
                    id: 'delayed-release',
                    question: '発売日を過ぎても届きません。',
                    answer: 'メーカー都合により発売が遅れることがあります。発売遅延によるキャンセルはできません。'
                },
                {
                    id: 'combine-orders',
                    question: '注文をまとめられますか？',
                    answer: '別々にご注文された商品を一括配送することはできません。'
                },
                {
                    id: 'partial-shipping',
                    question: '発売済商品のみ先に発送してもらえますか？',
                    answer: '全商品が揃い次第の一括発送となります。分割発送はできません。'
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
                    answer: '日時指定は承っておりません。予めご了承ください。'
                },
                {
                    id: 'shipping-cost',
                    question: '送料はいくらですか？',
                    answer: '全国一律550円（沖縄・離島は1210円）です。'
                },
                {
                    id: 'free-shipping',
                    question: '送料無料ラインはありますか？',
                    answer: '1回のご注文が5500円（税込）以上で送料無料（沖縄・離島除く）。'
                },
                {
                    id: 'shipping-company',
                    question: '配送業者や方法は選べますか？',
                    answer: '配送業者はヤマト運輸または佐川急便です。配送方法の指定はできません。'
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
                    answer: '予約受付期間内のみキャンセル可能です。それ以降はできませんのでご注意ください。'
                },
                {
                    id: 'return-exchange',
                    question: '商品を返品・交換したいです。',
                    answer: '原則としてお客様都合による返品・交換は承っておりません。不良品・誤送の場合は到着後7日以内にご連絡ください。'
                },
                {
                    id: 'refund-method',
                    question: 'キャンセル時の返金方法は？',
                    answer: '決済方法により異なります。コンビニ払いの場合は銀行振込での返金（550円手数料差引）となります。'
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
                    answer: 'お問い合わせフォームよりご連絡ください。こちらで退会処理を行います。'
                },
                {
                    id: 'newsletter',
                    question: 'メルマガの配信を停止したいです。',
                    answer: 'メール下部の「配信停止リンク」より停止が可能です。'
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

    // Create chatbot structure first
    container.innerHTML = `
        <div id="chatbot" style="display: none">
            <div class="chatbot-header">
                <h3>アニメストアFAQ</h3>
            </div>
            <div id="chat-messages"></div>
            <div id="chat-options"></div>
            <button id="restart-button" style="display: none">最初からやり直す</button>
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

    // Add loading indicator
    const loadingIndicator = document.createElement('div');
    loadingIndicator.id = 'chatbot-loading';
    loadingIndicator.innerHTML = '🤖 チャットボットを読み込んでいます...';
    loadingIndicator.style.cssText = `
        position: fixed;
        bottom: 20px;
        right: 20px;
        background: white;
        padding: 15px 20px;
        border-radius: 10px;
        box-shadow: 0 2px 10px rgba(0,0,0,0.1);
        z-index: 1001;
        font-family: sans-serif;
    `;
    document.body.appendChild(loadingIndicator);

    // Initialize chatbot
    console.log('🤖 Anime Store FAQ Chatbot: Initializing chatbot interface');
    const chatbot = new ChatBot();
    
    // Remove loading indicator and show chatbot after a brief delay
    setTimeout(() => {
        loadingIndicator.remove();
        const chatbotElement = document.getElementById('chatbot');
        if (chatbotElement) {
            chatbotElement.style.display = 'block';
            console.log('🤖 Anime Store FAQ Chatbot: Ready to help!');
        }
    }, 1000);
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
            timestamp: new Date().toISOString(),
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