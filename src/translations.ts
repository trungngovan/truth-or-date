// Language types
export type Language = 'en' | 'vi';

export interface Deck {
    id: string;
    name: string;
    description: string;
    gradient: string;
    content: {
        truth: string[];
        dare: string[];
    };
}

// Translation interfaces
export interface Translations {
    ageVerification: {
        title: string;
        message: string;
        confirm: string;
        deny: string;
    };
    title: {
        truth: string;
        or: string;
        dare: string;
        badge: string;
        subtitle: string;
    };
    buttons: {
        truth: string;
        dare: string;
        next: string;
        back: string;
    };
    counter: string;
    selectPrompt: string;
    game: {
        challengesCompleted: string;
        chooseChallenge: string;
        selectPrompt: string;
        truthButton: string;
        dareButton: string;
        nextButton: string;
        backButton: string;
        changeDeck: string;
    };
    decks: Deck[];
}

// English translations
export const en: Translations = {
    ageVerification: {
        title: '18+ ONLY',
        message: 'This game contains explicit sexual content. You must be 18+ to play.',
        confirm: "I'm 18+",
        deny: 'Exit',
    },
    title: {
        truth: 'TRUTH',
        or: 'OR',
        dare: 'DARE',
        badge: '18+',
        subtitle: 'X-RATED EDITION',
    },
    buttons: {
        truth: 'TRUTH',
        dare: 'DARE',
        next: 'Next',
        back: 'Decks',
    },
    counter: 'Round {count}',
    selectPrompt: 'Tap Next to start',
    game: {
        challengesCompleted: 'Completed',
        chooseChallenge: 'Pick One',
        selectPrompt: 'Truth or Dare?',
        truthButton: 'Truth',
        dareButton: 'Dare',
        nextButton: 'Next',
        backButton: 'Back',
        changeDeck: 'Change Deck',
    },
    decks: [
        {
            id: 'party-starter',
            name: 'Party',
            description: 'Get drunk, get naked, get wild. The ultimate pre-game.',
            gradient: 'from-purple-600 to-blue-600',
            content: {
                truth: [
                    "Who in this room do you want to fuck the most?",
                    "Have you ever masturbated thinking about someone here?",
                    "What's the grossest thing you've done for sex?",
                    "Have you ever had sex at a party?",
                    "Who has the best ass in the room?",
                    "Have you ever sent a nude to a coworker?",
                    "What's your favorite position to get fucked in?",
                    "Have you ever had a threesome? Would you?",
                    "Who was your best lay and why?",
                    "Have you ever tasted your own cum/juices?",
                    "What's the most public place you've cum?",
                    "Have you ever been caught masturbating?",
                    "Do you prefer spitting or swallowing?",
                    "Have you ever had sex with a friend's ex?",
                    "What's the longest you've gone without sex?",
                ],
                dare: [
                    "Take off your shirt and keep it off for 3 rounds.",
                    "Twerk on the person to your right for 30 seconds.",
                    "Take a body shot off someone's chest.",
                    "Let someone spank you as hard as they want.",
                    "Deep throat a banana or cucumber.",
                    "Show the group your favorite porn video.",
                    "Let the group choose someone for you to French kiss.",
                    "Flash your underwear (or lack thereof) to the group.",
                    "Let someone put their hand down your pants for 30 seconds.",
                    "Moan as loud as you can for 10 seconds.",
                    "Suck on someone's finger seductively for 20 seconds.",
                    "Let someone give you a wet willy.",
                    "Dry hump the person to your left for 1 minute.",
                    "Send a nude to the 3rd person in your contacts.",
                    "Let someone write 'SLUT' on your forehead.",
                ]
            }
        },
        {
            id: 'couples-dates',
            name: 'Couples',
            description: 'Turn up the heat. Foreplay, fantasies, and intimacy.',
            gradient: 'from-red-500 to-pink-600',
            content: {
                truth: [
                    "What's a sexual fantasy you've been too scared to tell me?",
                    "What's the best orgasm I've ever given you?",
                    "Do you like it when I talk dirty? Give an example.",
                    "What's one thing you want to try in bed tonight?",
                    "Have you ever faked an orgasm with me?",
                    "What outfit of mine makes you the horniest?",
                    "Do you prefer rough sex or slow lovemaking?",
                    "Where is the riskiest place you want to have sex with me?",
                    "What's your favorite part of my body to lick?",
                    "Have you ever thought about someone else while having sex with me?",
                    "Do you want to introduce toys into our sex life?",
                    "What's the loudest you've ever moaned?",
                    "Do you like anal play?",
                    "What's a kink you have that I don't know about?",
                    "How many times do you want to have sex tonight?",
                ],
                dare: [
                    "Give me a blowjob/eat me out for 2 minutes right now.",
                    "Take off my underwear with your teeth.",
                    "Let me tie you up and tease you.",
                    "Masturbate in front of me for 1 minute.",
                    "Give me a sensual massage with happy ending potential.",
                    "Kiss my inner thighs for 2 minutes.",
                    "Let me blindfold you and do whatever I want for 3 minutes.",
                    "Send me a video of you playing with yourself.",
                    "Whisper exactly what you want to do to me in my ear.",
                    "Let me drip hot wax on your chest/back.",
                    "Roleplay a stranger picking me up at a bar.",
                    "Let me control your orgasm tonight.",
                    "Put on a show for me while stripping.",
                    "Let me spank you until you're red.",
                    "Have sex with me right now.",
                ]
            }
        },
        {
            id: 'deep-talk',
            name: 'Secrets',
            description: 'Confess your darkest sins and sexual history.',
            gradient: 'from-teal-500 to-emerald-600',
            content: {
                truth: [
                    "What's the most illegal thing you've done sexually?",
                    "Have you ever paid for sex?",
                    "Have you ever had an STI?",
                    "What's the most fucked up thing you've done to a partner?",
                    "Have you ever cheated? Why?",
                    "What's a sexual secret that could ruin your life?",
                    "Have you ever been attracted to a family member?",
                    "What's the most number of people you've slept with in a day?",
                    "Have you ever filmed a sex tape without consent?",
                    "What's your darkest fetish?",
                    "Have you ever been involved in an orgy?",
                    "Have you ever had sex with an animal? (Just kidding... or are we?)",
                    "What's the most degrading thing you've done for money?",
                    "Have you ever been the 'other person' in a relationship?",
                    "What's the worst thing you've ever said to someone during sex?",
                ],
                dare: [
                    "Call your ex and tell them you miss their body.",
                    "Show the group the last nude you sent/received.",
                    "Let the group go through your hidden photo folder.",
                    "Post a status saying 'I'm so horny right now'.",
                    "DM your crush 'I had a wet dream about you'.",
                    "Let someone read your sexts out loud.",
                    "Show your browser history to the person on your right.",
                    "Call your parents and ask for sex advice.",
                    "Let the group text anyone in your phone 'I want to fuck you'.",
                    "Reveal your body count to everyone.",
                    "Describe your genitals in detail.",
                    "Let someone look at your Tinder/Bumble matches.",
                    "Tell the group about your first time in graphic detail.",
                    "Admit who in this room you would hate to sleep with.",
                    "Show your Amazon purchase history (looking for toys).",
                ]
            }
        },
        {
            id: 'after-dark',
            name: 'After Dark',
            description: 'BDSM, pain, submission. Not for the faint of heart.',
            gradient: 'from-gray-900 to-black border border-red-600',
            content: {
                truth: [
                    "Do you like being choked? How hard?",
                    "Have you ever made someone bleed during sex?",
                    "What's your safe word?",
                    "Do you own a ball gag or collar?",
                    "Have you ever been peed on?",
                    "Do you like feet? Would you suck toes?",
                    "Have you ever been fisted?",
                    "Do you like humiliation play?",
                    "Have you ever had sex in public where people watched?",
                    "What's the most painful thing you've done for pleasure?",
                    "Do you like being treated like an object?",
                    "Have you ever used a strap-on?",
                    "Do you like impact play (whips, paddles)?",
                    "Have you ever done pet play?",
                    "Would you let someone share you with their friends?",
                ],
                dare: [
                    "Let someone choke you (safely) for 10 seconds.",
                    "Lick the floor or someone's shoe.",
                    "Let someone spit in your mouth.",
                    "Be someone's footrest for the next 3 rounds.",
                    "Let someone slap your face.",
                    "Wear a collar and leash for the rest of the game.",
                    "Crawl around on all fours and bark like a dog.",
                    "Let someone drip hot candle wax on your nipples.",
                    "Put a clothespin on your nipple for 1 minute.",
                    "Let the group tie you up in a stress position.",
                    "Gag yourself with a piece of clothing for 2 minutes.",
                    "Let someone write 'SLUT' or 'WHORE' on your body.",
                    "Beg for permission to speak for the next 3 rounds.",
                    "Let someone whip you with a belt 5 times.",
                    "Worship the feet of the person to your left.",
                ]
            }
        }
    ]
};

// Vietnamese translations
export const vi: Translations = {
    ageVerification: {
        title: 'CẤM TRẺ EM (18+)',
        message: 'Trò chơi này chứa nội dung tình dục rõ ràng. Bạn phải trên 18 tuổi.',
        confirm: 'Tôi đã 18+',
        deny: 'Thoát',
    },
    title: {
        truth: 'SỰ THẬT',
        or: 'HAY',
        dare: 'THÁCH THỨC',
        badge: '18+',
        subtitle: 'PHIÊN BẢN NGƯỜI LỚN',
    },
    buttons: {
        truth: 'SỰ THẬT',
        dare: 'THÁCH THỨC',
        next: 'Tiếp',
        back: 'Bộ Bài',
    },
    counter: 'Vòng {count}',
    selectPrompt: 'Nhấn Tiếp để bắt đầu',
    game: {
        challengesCompleted: 'Hoàn thành',
        chooseChallenge: 'Chọn đi',
        selectPrompt: 'Sự Thật hay Thách Thức?',
        truthButton: 'Sự Thật',
        dareButton: 'Thách Thức',
        nextButton: 'Tiếp',
        backButton: 'Quay lại',
        changeDeck: 'Đổi Bộ',
    },
    decks: [
        {
            id: 'party-starter',
            name: 'Party',
            description: 'Say xỉn, cởi đồ, hoang dại. Bữa tiệc bắt đầu từ đây.',
            gradient: 'from-purple-600 to-blue-600',
            content: {
                truth: [
                    "Ai trong phòng này bạn muốn 'phang' nhất?",
                    "Bạn đã bao giờ thủ dâm khi nghĩ về ai đó ở đây chưa?",
                    "Điều kinh tởm nhất bạn từng làm vì tình dục là gì?",
                    "Bạn đã bao giờ quan hệ tại một bữa tiệc chưa?",
                    "Ai có mông đẹp nhất trong phòng?",
                    "Bạn đã bao giờ gửi ảnh nude cho đồng nghiệp chưa?",
                    "Tư thế quan hệ yêu thích nhất của bạn là gì?",
                    "Bạn đã bao giờ chơi threesome chưa? Có muốn không?",
                    "Ai là người làm tình giỏi nhất bạn từng gặp?",
                    "Bạn đã bao giờ nếm tinh dịch/nước dâm của chính mình chưa?",
                    "Nơi công cộng nhất bạn từng lên đỉnh là đâu?",
                    "Bạn đã bao giờ bị bắt gặp khi đang thủ dâm chưa?",
                    "Bạn thích nuốt hay nhổ?",
                    "Bạn đã bao giờ quan hệ với người yêu cũ của bạn thân chưa?",
                    "Thời gian lâu nhất bạn không quan hệ là bao lâu?",
                ],
                dare: [
                    "Cởi áo ra và để trần trong 3 vòng.",
                    "Nhảy twerk lên người bên phải trong 30 giây.",
                    "Uống rượu trên ngực ai đó.",
                    "Để ai đó đánh vào mông bạn mạnh tùy thích.",
                    "Bú một quả chuối hoặc dưa chuột thật sâu.",
                    "Cho nhóm xem video sex yêu thích của bạn.",
                    "Để nhóm chọn một người cho bạn hôn kiểu Pháp.",
                    "Vạch quần lót (hoặc chỗ đó) cho nhóm xem nhanh.",
                    "Để ai đó thò tay vào quần bạn trong 30 giây.",
                    "Rên rỉ to nhất có thể trong 10 giây.",
                    "Mút ngón tay ai đó thật gợi tình trong 20 giây.",
                    "Để ai đó liếm tai bạn.",
                    "Mô phỏng động tác quan hệ với người bên trái trong 1 phút.",
                    "Gửi ảnh nude cho người thứ 3 trong danh bạ.",
                    "Để ai đó viết chữ 'ĐĨ' lên trán bạn.",
                ]
            }
        },
        {
            id: 'couples-dates',
            name: 'Cặp Đôi',
            description: 'Hâm nóng tình cảm. Màn dạo đầu, tưởng tượng và sự thân mật.',
            gradient: 'from-red-500 to-pink-600',
            content: {
                truth: [
                    "Tưởng tượng tình dục nào em/anh chưa dám nói với anh/em?",
                    "Lần lên đỉnh tuyệt nhất anh/em từng mang lại cho em/anh là khi nào?",
                    "Em/Anh có thích anh/em nói bậy khi làm tình không? Ví dụ?",
                    "Một điều em/anh muốn thử trên giường tối nay là gì?",
                    "Em/Anh đã bao giờ giả vờ lên đỉnh với anh/em chưa?",
                    "Bộ đồ nào của anh/em làm em/anh nứng nhất?",
                    "Em/Anh thích làm tình mạnh bạo hay nhẹ nhàng?",
                    "Nơi mạo hiểm nhất em/anh muốn làm tình với anh/em là đâu?",
                    "Em/Anh thích liếm chỗ nào nhất trên cơ thể anh/em?",
                    "Em/Anh đã bao giờ nghĩ đến người khác khi quan hệ với anh/em chưa?",
                    "Em/Anh có muốn dùng đồ chơi tình dục không?",
                    "Lần em/anh rên to nhất là khi nào?",
                    "Em/Anh có thích quan hệ cửa sau (anal) không?",
                    "Kink nào của em/anh mà anh/em chưa biết?",
                    "Em/Anh muốn làm mấy nháy tối nay?",
                ],
                dare: [
                    "BJ/Lick cho anh/em trong 2 phút ngay bây giờ.",
                    "Cởi quần lót của anh/em bằng răng.",
                    "Để anh/em trói em/anh lại và trêu chọc.",
                    "Thủ dâm trước mặt anh/em trong 1 phút.",
                    "Mát-xa gợi cảm cho anh/em (có happy ending).",
                    "Hôn đùi trong của anh/em trong 2 phút.",
                    "Để anh/em bịt mắt và làm gì tùy thích trong 3 phút.",
                    "Gửi cho anh/em video em/anh đang tự sướng.",
                    "Thì thầm chính xác những gì em/anh muốn làm với anh/em.",
                    "Để anh/em nhỏ nến lên ngực/lưng em/anh.",
                    "Đóng vai người lạ tán tỉnh nhau ở quán bar.",
                    "Để anh/em kiểm soát việc lên đỉnh của em/anh tối nay.",
                    "Múa thoát y cho anh/em xem.",
                    "Để anh/em đánh mông cho đến khi đỏ lên.",
                    "Làm tình với anh/em ngay bây giờ.",
                ]
            }
        },
        {
            id: 'deep-talk',
            name: 'Bí Mật',
            description: 'Thú nhận những tội lỗi và lịch sử tình dục đen tối nhất.',
            gradient: 'from-teal-500 to-emerald-600',
            content: {
                truth: [
                    "Điều phạm pháp nhất bạn từng làm liên quan đến tình dục là gì?",
                    "Bạn đã bao giờ trả tiền để mua dâm chưa?",
                    "Bạn đã bao giờ bị bệnh xã hội chưa?",
                    "Điều khốn nạn nhất bạn từng làm với người yêu là gì?",
                    "Bạn đã bao giờ ngoại tình chưa? Tại sao?",
                    "Bí mật tình dục nào có thể hủy hoại cuộc đời bạn?",
                    "Bạn đã bao giờ bị thu hút bởi thành viên trong gia đình chưa?",
                    "Số người nhiều nhất bạn từng ngủ cùng trong 1 ngày là bao nhiêu?",
                    "Bạn đã bao giờ quay lén sex chưa?",
                    "Fetish đen tối nhất của bạn là gì?",
                    "Bạn đã bao giờ tham gia tiệc sex (orgy) chưa?",
                    "Bạn đã bao giờ quan hệ với động vật chưa? (Đùa thôi... hay là thật?)",
                    "Điều nhục nhã nhất bạn từng làm vì tiền là gì?",
                    "Bạn đã bao giờ là 'tiểu tam' chưa?",
                    "Câu nói tồi tệ nhất bạn từng nói với ai đó khi đang quan hệ là gì?",
                ],
                dare: [
                    "Gọi cho người yêu cũ và nói bạn nhớ cơ thể họ.",
                    "Cho nhóm xem ảnh nude gần nhất bạn gửi/nhận.",
                    "Để nhóm xem thư mục ảnh ẩn của bạn.",
                    "Đăng status 'Tao đang nứng quá'.",
                    "Nhắn tin cho crush 'Tao vừa mơ ướt về mày'.",
                    "Để ai đó đọc to tin nhắn sex của bạn.",
                    "Cho người bên phải xem lịch sử duyệt web.",
                    "Gọi cho bố mẹ và xin lời khuyên về tình dục.",
                    "Để nhóm nhắn cho ai đó trong danh bạ 'Tao muốn địt mày'.",
                    "Công khai số lượng bạn tình (body count) với mọi người.",
                    "Mô tả chi tiết bộ phận sinh dục của bạn.",
                    "Để ai đó xem các match trên Tinder/Bumble của bạn.",
                    "Kể cho nhóm nghe về lần đầu tiên của bạn thật chi tiết.",
                    "Thừa nhận ai trong phòng này bạn ghét ngủ cùng nhất.",
                    "Cho xem lịch sử mua hàng Amazon/Shopee (tìm đồ chơi).",
                ]
            }
        },
        {
            id: 'after-dark',
            name: 'Đêm Khuya',
            description: 'BDSM, đau đớn, phục tùng. Không dành cho kẻ yếu tim.',
            gradient: 'from-gray-900 to-black border border-red-600',
            content: {
                truth: [
                    "Bạn có thích bị bóp cổ không? Mạnh cỡ nào?",
                    "Bạn đã bao giờ làm ai đó chảy máu khi quan hệ chưa?",
                    "Safe word (từ an toàn) của bạn là gì?",
                    "Bạn có sở hữu bóng bịt miệng (ball gag) hay vòng cổ không?",
                    "Bạn đã bao giờ bị tè lên người chưa?",
                    "Bạn có thích chân không? Có muốn mút ngón chân không?",
                    "Bạn đã bao giờ bị fisting (nhét cả nắm tay) chưa?",
                    "Bạn có thích trò chơi làm nhục (humiliation) không?",
                    "Bạn đã bao giờ quan hệ nơi công cộng có người nhìn thấy chưa?",
                    "Điều đau đớn nhất bạn từng làm để thỏa mãn là gì?",
                    "Bạn có thích bị đối xử như đồ vật không?",
                    "Bạn đã bao giờ dùng dương vật giả đeo (strap-on) chưa?",
                    "Bạn có thích bị đánh (roi, vỉ đập) không?",
                    "Bạn đã bao giờ chơi trò đóng vai thú cưng (pet play) chưa?",
                    "Bạn có đồng ý để người yêu chia sẻ bạn với bạn bè họ không?",
                ],
                dare: [
                    "Để ai đó bóp cổ bạn (an toàn) trong 10 giây.",
                    "Liếm sàn nhà hoặc giày của ai đó.",
                    "Để ai đó nhổ nước bọt vào miệng bạn.",
                    "Làm ghế gác chân cho ai đó trong 3 vòng.",
                    "Để ai đó tát vào mặt bạn.",
                    "Đeo vòng cổ và dây xích trong phần còn lại của trò chơi.",
                    "Bò bằng 4 chân và sủa như chó.",
                    "Để ai đó nhỏ nến nóng lên đầu ti.",
                    "Kẹp kẹp quần áo vào đầu ti trong 1 phút.",
                    "Để nhóm trói bạn ở tư thế khó chịu.",
                    "Tự bịt miệng bằng quần lót/tất trong 2 phút.",
                    "Để ai đó viết 'ĐĨ' hoặc 'CHÓ' lên người bạn.",
                    "Xin phép trước khi nói trong 3 vòng tới.",
                    "Để ai đó quất bạn bằng thắt lưng 5 cái.",
                    "Thờ phụng (hôn/liếm) chân người bên trái.",
                ]
            }
        }
    ]
};

// Get translations by language
export const getTranslations = (language: Language): Translations => {
    return language === 'vi' ? vi : en;
};
