// Language types
export type Language = 'en' | 'vi';
export type Difficulty = 'mild' | 'spicy' | 'wild';

// Translation interfaces
export interface Translations {
    ageVerification: {
        title: string;
        warning: string;
        question: string;
        yesButton: string;
        noButton: string;
        disclaimer: string;
    };
    title: {
        truth: string;
        or: string;
        dare: string;
        badge: string;
        subtitle: string;
    };
    difficulty: {
        mild: string;
        spicy: string;
        wild: string;
    };
    game: {
        challengesCompleted: string;
        chooseChallenge: string;
        selectPrompt: string;
        truthButton: string;
        dareButton: string;
        nextButton: string;
        backButton: string;
        difficultyLevel: string;
    };
    truths: {
        mild: string[];
        spicy: string[];
        wild: string[];
    };
    dares: {
        mild: string[];
        spicy: string[];
        wild: string[];
    };
}

// English translations
export const en: Translations = {
    ageVerification: {
        title: '18+ ONLY',
        warning: 'This game contains <span class="text-neon-pink font-bold">adult content</span> including explicit sexual themes and mature language.',
        question: 'Are you 18 years or older?',
        yesButton: "Yes, I'm 18+",
        noButton: 'No, Exit',
        disclaimer: 'By entering, you confirm you are of legal age in your jurisdiction',
    },
    title: {
        truth: 'TRUTH',
        or: 'OR',
        dare: 'DARE',
        badge: '18+',
        subtitle: 'Adult Edition',
    },
    difficulty: {
        mild: 'Mild',
        spicy: 'Spicy',
        wild: 'Wild',
    },
    game: {
        challengesCompleted: 'Challenges Completed',
        chooseChallenge: 'Choose Your Challenge',
        selectPrompt: 'Select Truth or Dare to begin',
        truthButton: 'Truth',
        dareButton: 'Dare',
        nextButton: 'Next Challenge',
        backButton: 'Back',
        difficultyLevel: 'Level',
    },
    truths: {
        mild: [
            "What's your biggest turn-on that you've never told anyone?",
            "Have you ever had a sex dream about someone in this room?",
            "What's the most embarrassing thing that's happened to you during sex?",
            "How many people have you slept with?",
            "What's your go-to fantasy when you're alone?",
            "Have you ever sent nudes to the wrong person?",
            "What's the kinkiest thing you've ever done?",
            "Where's the weirdest place you've had sex?",
            "Have you ever faked an orgasm? How many times?",
            "What's your most used porn category?",
        ],
        spicy: [
            "What's the most taboo sexual fantasy you have?",
            "Have you ever hooked up with someone you shouldn't have?",
            "What's the dirtiest text you've ever sent?",
            "Have you ever been caught having sex? Tell the story.",
            "What's your body count and do you regret any of them?",
            "Have you ever had a threesome or would you want to?",
            "What's the most adventurous sexual experience you've had?",
            "Have you ever cheated on a partner? Details.",
            "What's something sexual you want to try but are too afraid to ask for?",
            "Have you ever recorded yourself during sex?",
        ],
        wild: [
            "Describe your last sexual encounter in detail.",
            "What's the most degrading thing you've done or had done to you sexually?",
            "Have you ever paid for sex or been paid for sexual favors?",
            "What's your darkest sexual secret that could ruin your reputation?",
            "Have you ever had sex with multiple people in the same day?",
            "What's the most illegal sexual thing you've done?",
            "Have you ever had feelings for a family member's partner and acted on it?",
            "What's the most public place you've had sex and almost got caught?",
            "Have you ever been involved in any form of sex work?",
            "What sexual act do you secretly crave but would never admit out loud?",
        ],
    },
    dares: {
        mild: [
            "Give someone in the room a sensual shoulder massage for 2 minutes",
            "Demonstrate your best seduction technique on someone here",
            "Send a dirty text to your most recent contact (show proof)",
            "Do a sexy dance for 30 seconds",
            "Let someone give you a hickey",
            "Describe your ideal one-night stand in detail",
            "Kiss the person to your left on the neck",
            "Show the group your sexiest photo",
            "Let someone of the group's choice sit on your lap for 3 rounds",
            "Remove one piece of clothing (your choice)",
        ],
        spicy: [
            "Make out with someone in the room for 30 seconds",
            "Let the group go through your dating app messages",
            "Send a nude to someone (or show proof of a previous one)",
            "Give someone a lap dance for one full song",
            "Let someone touch you anywhere above the waist for 1 minute",
            "Describe your last sexual experience in graphic detail",
            "Take off your shirt/top for the next 3 rounds",
            "Let someone give you a body shot",
            "Sext with someone in the room for 5 minutes (show messages)",
            "Recreate your favorite position with someone here (clothed)",
        ],
        wild: [
            "Make out with the hottest person in the room for 2 minutes",
            "Let someone take a nude photo of you (you keep the phone)",
            "Go into another room with someone for 7 minutes (no rules)",
            "Strip down to your underwear for the rest of the game",
            "Let the group choose two people to shower together (clothed or not)",
            "Perform oral on a popsicle/banana as seductively as possible",
            "Let someone of the group's choice give you a full body massage",
            "Share your screen and open your private browser history",
            "Take a body shot off someone's body (their choice where)",
            "Let someone undress you down to your underwear",
        ],
    },
};

// Vietnamese translations
export const vi: Translations = {
    ageVerification: {
        title: 'CHỈ DÀNH CHO 18+',
        warning: 'Trò chơi này chứa <span class="text-neon-pink font-bold">nội dung người lớn</span> bao gồm chủ đề tình dục và ngôn ngữ trưởng thành.',
        question: 'Bạn đã đủ 18 tuổi chưa?',
        yesButton: 'Có, tôi 18+',
        noButton: 'Không, Thoát',
        disclaimer: 'Bằng cách vào, bạn xác nhận bạn đủ tuổi hợp pháp tại khu vực của bạn',
    },
    title: {
        truth: 'SỰ THẬT',
        or: 'HAY',
        dare: 'THÁCH THỨC',
        badge: '18+',
        subtitle: 'Phiên Bản Người Lớn',
    },
    difficulty: {
        mild: 'Nhẹ Nhàng',
        spicy: 'Cay Nồng',
        wild: 'Bạo Liệt',
    },
    game: {
        challengesCompleted: 'Thử Thách Hoàn Thành',
        chooseChallenge: 'Chọn Thử Thách Của Bạn',
        selectPrompt: 'Chọn Sự Thật hoặc Thách Thức để bắt đầu',
        truthButton: 'Sự Thật',
        dareButton: 'Thách Thức',
        nextButton: 'Thử Thách Tiếp Theo',
        backButton: 'Quay Lại',
        difficultyLevel: 'Cấp Độ',
    },
    truths: {
        mild: [
            "Điều gì kích thích bạn nhất mà bạn chưa bao giờ nói với ai?",
            "Bạn đã bao giờ mơ thấy quan hệ với ai đó trong phòng này chưa?",
            "Điều xấu hổ nhất xảy ra với bạn khi quan hệ là gì?",
            "Bạn đã ngủ với bao nhiêu người?",
            "Tưởng tượng yêu thích của bạn khi ở một mình là gì?",
            "Bạn đã bao giờ gửi ảnh nóng nhầm người chưa?",
            "Điều kỳ dị nhất bạn từng làm trong chuyện ấy là gì?",
            "Nơi kỳ lạ nhất bạn từng quan hệ là đâu?",
            "Bạn đã bao giờ giả vờ cực khoái chưa? Bao nhiêu lần?",
            "Thể loại phim người lớn bạn xem nhiều nhất là gì?",
        ],
        spicy: [
            "Tưởng tượng tình dục cấm kỵ nhất của bạn là gì?",
            "Bạn đã bao giờ quan hệ với người không nên chưa?",
            "Tin nhắn bẩn nhất bạn từng gửi là gì?",
            "Bạn đã bao giờ bị bắt gặp khi quan hệ chưa? Kể chi tiết.",
            "Bạn đã ngủ với bao nhiêu người và có hối hận ai không?",
            "Bạn đã bao giờ chơi ba người hoặc muốn thử chưa?",
            "Trải nghiệm tình dục mạo hiểm nhất của bạn là gì?",
            "Bạn đã bao giờ lừa dối người yêu chưa? Chi tiết.",
            "Điều gì về tình dục bạn muốn thử nhưng sợ không dám hỏi?",
            "Bạn đã bao giờ quay video khi quan hệ chưa?",
        ],
        wild: [
            "Mô tả chi tiết lần quan hệ gần nhất của bạn.",
            "Điều nhục nhã nhất bạn đã làm hoặc bị làm trong chuyện ấy là gì?",
            "Bạn đã bao giờ trả tiền cho tình dục hoặc được trả tiền chưa?",
            "Bí mật tình dục đen tối nhất có thể hủy hoại danh tiếng bạn là gì?",
            "Bạn đã bao giờ quan hệ với nhiều người trong cùng một ngày chưa?",
            "Điều bất hợp pháp nhất về tình dục bạn từng làm là gì?",
            "Bạn đã bao giờ có tình cảm với người yêu của người thân và hành động chưa?",
            "Nơi công cộng nhất bạn từng quan hệ và suýt bị bắt là đâu?",
            "Bạn đã bao giờ tham gia vào bất kỳ hình thức công việc tình dục nào chưa?",
            "Hành động tình dục nào bạn thầm khao khát nhưng không bao giờ dám thừa nhận?",
        ],
    },
    dares: {
        mild: [
            "Mát-xa vai gợi cảm cho ai đó trong phòng trong 2 phút",
            "Thể hiện kỹ thuật quyến rũ tốt nhất của bạn với ai đó ở đây",
            "Gửi tin nhắn bẩn cho người liên hệ gần nhất (cho xem bằng chứng)",
            "Nhảy sexy trong 30 giây",
            "Để ai đó hôn hút trên cổ bạn",
            "Mô tả chi tiết cuộc tình một đêm lý tưởng của bạn",
            "Hôn cổ người bên trái bạn",
            "Cho nhóm xem ảnh sexy nhất của bạn",
            "Để người mà nhóm chọn ngồi lên đùi bạn trong 3 vòng",
            "Cởi một món đồ (bạn chọn)",
        ],
        spicy: [
            "Hôn môi ai đó trong phòng trong 30 giây",
            "Để nhóm xem tin nhắn ứng dụng hẹn hò của bạn",
            "Gửi ảnh nóng cho ai đó (hoặc cho xem ảnh cũ)",
            "Múa cột cho ai đó trong một bài hát",
            "Để ai đó chạm vào bạn ở bất cứ đâu trên thắt lưng trong 1 phút",
            "Mô tả chi tiết trải nghiệm tình dục gần nhất của bạn",
            "Cởi áo trong 3 vòng tiếp theo",
            "Để ai đó uống rượu trên cơ thể bạn",
            "Nhắn tin sex với ai đó trong phòng trong 5 phút (cho xem tin nhắn)",
            "Tái hiện tư thế yêu thích của bạn với ai đó ở đây (mặc quần áo)",
        ],
        wild: [
            "Hôn người hấp dẫn nhất trong phòng trong 2 phút",
            "Để ai đó chụp ảnh nóng của bạn (bạn giữ điện thoại)",
            "Vào phòng khác với ai đó trong 7 phút (không có quy tắc)",
            "Cởi đến đồ lót trong phần còn lại của trò chơi",
            "Để nhóm chọn hai người tắm cùng nhau (mặc hoặc không)",
            "Làm oral với kem que/chuối một cách gợi cảm nhất có thể",
            "Để người mà nhóm chọn mát-xa toàn thân cho bạn",
            "Chia sẻ màn hình và mở lịch sử trình duyệt riêng tư",
            "Uống rượu trên cơ thể ai đó (họ chọn vị trí)",
            "Để ai đó cởi quần áo bạn đến đồ lót",
        ],
    },
};

// Get translations by language
export const getTranslations = (language: Language): Translations => {
    return language === 'vi' ? vi : en;
};
