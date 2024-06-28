
interface Template {
    name: string;
    desc: string;
    category: string;
    icon: string;
    aiPrompt: string;
    slug: string;
    form: {
      label: string;
      field: string;
      name: string;
      required: boolean;
    }[];
  }

const templates: Template[] =  [
    {
        name: 'Ad Copy Generator',
        desc: 'An AI tool that creates engaging ad copies for your campaigns.',
        category: 'Advertising',
        icon: 'https://cdn-icons-png.flaticon.com/128/1126/1126896.png',
        aiPrompt: 'Generate engaging ad copies based on the provided product details.',
        slug: 'ad-copy-generator',
        form: [
            {
                label: 'Enter product details',
                field: 'textarea',
                name: 'productDetails',
                required: true
            }
        ]
    },
    {
        name: 'Video Script Writer',
        desc: 'An AI tool that writes video scripts based on your topic.',
        category: 'Video',
        icon: 'https://cdn-icons-png.flaticon.com/128/1976/1976115.png',
        aiPrompt: 'Write a video script based on the provided topic.',
        slug: 'video-script-writer',
        form: [
            {
                label: 'Enter your topic',
                field: 'input',
                name: 'topic',
                required: true
            }
        ]
    },
    {
        name: 'Instagram Caption Generator',
        desc: 'An AI tool that creates catchy Instagram captions.',
        category: 'Social Media',
        icon: 'https://cdn-icons-png.flaticon.com/128/733/733558.png',
        aiPrompt: 'Generate catchy Instagram captions based on the provided image or content details.',
        slug: 'instagram-caption-generator',
        form: [
            {
                label: 'Enter image or content details',
                field: 'textarea',
                name: 'contentDetails',
                required: true
            }
        ]
    },
    {
        name: 'Product Review Writer',
        desc: 'An AI tool that generates detailed product reviews.',
        category: 'E-commerce',
        icon: 'https://cdn-icons-png.flaticon.com/128/327/327896.png',
        aiPrompt: 'Write a detailed product review based on the provided product details.',
        slug: 'product-review-writer',
        form: [
            {
                label: 'Enter product details',
                field: 'textarea',
                name: 'productDetails',
                required: true
            }
        ]
    },
    {
        name: 'Newsletter Content Generator',
        desc: 'An AI tool that generates engaging newsletter content.',
        category: 'Email',
        icon: 'https://cdn-icons-png.flaticon.com/128/2983/2983784.png',
        aiPrompt: 'Create engaging newsletter content based on the provided topics.',
        slug: 'newsletter-content-generator',
        form: [
            {
                label: 'Enter your topics',
                field: 'textarea',
                name: 'topics',
                required: true
            }
        ]
    },
    {
        name: 'LinkedIn Post Ideas',
        desc: 'An AI tool that generates professional LinkedIn post ideas.',
        category: 'Social Media',
        icon: 'https://cdn-icons-png.flaticon.com/128/174/174857.png',
        aiPrompt: 'Generate professional LinkedIn post ideas based on the provided topic.',
        slug: 'linkedin-post-ideas',
        form: [
            {
                label: 'Enter your topic',
                field: 'input',
                name: 'topic',
                required: true
            }
        ]
    },
    {
        name: 'Resume Builder',
        desc: 'An AI tool that builds a professional resume.',
        category: 'Career',
        icon: 'https://cdn-icons-png.flaticon.com/128/1656/1656717.png',
        aiPrompt: 'Create a professional resume based on the provided personal details and work experience.',
        slug: 'resume-builder',
        form: [
            {
                label: 'Enter your personal details and work experience',
                field: 'textarea',
                name: 'personalDetails',
                required: true
            }
        ]
    },
    {
        name: 'Cover Letter Generator',
        desc: 'An AI tool that writes a professional cover letter.',
        category: 'Career',
        icon: 'https://cdn-icons-png.flaticon.com/128/2985/2985157.png',
        aiPrompt: 'Write a professional cover letter based on the provided job details and personal information.',
        slug: 'cover-letter-generator',
        form: [
            {
                label: 'Enter job details and personal information',
                field: 'textarea',
                name: 'jobDetails',
                required: true
            }
        ]
    },
    {
        name: 'Tagline Generator',
        desc: 'An AI tool that generates creative taglines for your brand.',
        category: 'Branding',
        icon: 'https://cdn-icons-png.flaticon.com/128/3789/3789738.png',
        aiPrompt: 'Generate creative taglines based on the provided brand details.',
        slug: 'tagline-generator',
        form: [
            {
                label: 'Enter brand details',
                field: 'textarea',
                name: 'brandDetails',
                required: true
            }
        ]
    },
    {
        name: 'Slogan Maker',
        desc: 'An AI tool that creates catchy slogans for your business.',
        category: 'Branding',
        icon: 'https://cdn-icons-png.flaticon.com/128/869/869636.png',
        aiPrompt: 'Create catchy slogans based on the provided business details.',
        slug: 'slogan-maker',
        form: [
            {
                label: 'Enter business details',
                field: 'textarea',
                name: 'businessDetails',
                required: true
            }
        ]
    },
    {
        name: 'Podcast Topic Generator',
        desc: 'An AI tool that generates interesting podcast topics.',
        category: 'Podcasting',
        icon: 'https://cdn-icons-png.flaticon.com/128/3868/3868714.png',
        aiPrompt: 'Generate interesting podcast topics based on the provided theme.',
        slug: 'podcast-topic-generator',
        form: [
            {
                label: 'Enter theme',
                field: 'input',
                name: 'theme',
                required: true
            }
        ]
    },
    {
        name: 'Event Invitation Writer',
        desc: 'An AI tool that writes professional event invitations.',
        category: 'Event Planning',
        icon: 'https://cdn-icons-png.flaticon.com/128/1244/1244136.png',
        aiPrompt: 'Write a professional event invitation based on the provided event details.',
        slug: 'event-invitation-writer',
        form: [
            {
                label: 'Enter event details',
                field: 'textarea',
                name: 'eventDetails',
                required: true
            }
        ]
    },
    {
        name: 'Job Description Creator',
        desc: 'An AI tool that creates detailed job descriptions.',
        category: 'HR',
        icon: 'https://cdn-icons-png.flaticon.com/128/921/921591.png',
        aiPrompt: 'Create a detailed job description based on the provided job details.',
        slug: 'job-description-creator',
        form: [
            {
                label: 'Enter job details',
                field: 'textarea',
                name: 'jobDetails',
                required: true
            }
        ]
    },
    {
        name: 'App Description Writer',
        desc: 'An AI tool that writes compelling app descriptions.',
        category: 'App Development',
        icon: 'https://cdn-icons-png.flaticon.com/128/2971/2971307.png',
        aiPrompt: 'Write a compelling app description based on the provided app features.',
        slug: 'app-description-writer',
        form: [
            {
                label: 'Enter app features',
                field: 'textarea',
                name: 'appFeatures',
                required: true
            }
        ]
    },
    {
        name: 'Case Study Creator',
        desc: 'An AI tool that creates detailed case studies.',
        category: 'Content',
        icon: 'https://cdn-icons-png.flaticon.com/128/1041/1041886.png',
        aiPrompt: 'Create a detailed case study based on the provided project details.',
        slug: 'case-study-creator',
        form: [
            {
                label: 'Enter project details',
                field: 'textarea',
                name: 'projectDetails',
                required: true
            }
        ]
    },
    {
        name: 'Whitepaper Writer',
        desc: 'An AI tool that writes comprehensive whitepapers.',
        category: 'Content',
        icon: 'https://cdn-icons-png.flaticon.com/128/2462/2462719.png',
        aiPrompt: 'Write a comprehensive whitepaper based on the provided research data.',
        slug: 'whitepaper-writer',
        form: [
            {
                label: 'Enter research data',
                field: 'textarea',
                name: 'researchData',
                required: true
            }
        ]
    },
    {
        name: 'Webinar Script Generator',
        desc: 'An AI tool that generates webinar scripts.',
        category: 'Webinar',
        icon: 'https://cdn-icons-png.flaticon.com/128/1458/1458433.png',
        aiPrompt: 'Generate a webinar script based on the provided topic and details.',
        slug: 'webinar-script-generator',
        form: [
            {
                label: 'Enter topic and details',
                field: 'textarea',
                name: 'topicDetails',
                required: true
            }
        ]
    },
    {
        name: 'Presentation Slide Creator',
        desc: 'An AI tool that creates presentation slides.',
        category: 'Presentation',
        icon: 'https://cdn-icons-png.flaticon.com/128/2543/2543366.png',
        aiPrompt: 'Create presentation slides based on the provided content.',
        slug: 'presentation-slide-creator',
        form: [
            {
                label: 'Enter content',
                field: 'textarea',
                name: 'content',
                required: true
            }
        ]
    },
    {
        name: 'FAQ Generator',
        desc: 'An AI tool that generates a list of FAQs.',
        category: 'Support',
        icon: 'https://cdn-icons-png.flaticon.com/128/3135/3135731.png',
        aiPrompt: 'Generate a list of FAQs based on the provided topic.',
        slug: 'faq-generator',
        form: [
            {
                label: 'Enter topic',
                field: 'input',
                name: 'topic',
                required: true
            }
        ]
    },
    {
        name: 'Customer Testimonial Writer',
        desc: 'An AI tool that writes customer testimonials.',
        category: 'E-commerce',
        icon: 'https://cdn-icons-png.flaticon.com/128/3594/3594528.png',
        aiPrompt: 'Write a customer testimonial based on the provided product details and customer feedback.',
        slug: 'customer-testimonial-writer',
        form: [
            {
                label: 'Enter product details and customer feedback',
                field: 'textarea',
                name: 'feedbackDetails',
                required: true
            }
        ]
    },
    {
        name: 'Headline Generator',
        desc: 'An AI tool that creates attention-grabbing headlines.',
        category: 'Content',
        icon: 'https://cdn-icons-png.flaticon.com/128/1040/1040285.png',
        aiPrompt: 'Generate attention-grabbing headlines based on the provided content.',
        slug: 'headline-generator',
        form: [
            {
                label: 'Enter content details',
                field: 'textarea',
                name: 'contentDetails',
                required: true
            }
        ]
    },
    {
        name: 'Quora Answer Generator',
        desc: 'An AI tool that generates answers for Quora questions.',
        category: 'Content',
        icon: 'https://cdn-icons-png.flaticon.com/128/733/733609.png',
        aiPrompt: 'Generate a detailed answer for the provided Quora question.',
        slug: 'quora-answer-generator',
        form: [
            {
                label: 'Enter Quora question',
                field: 'textarea',
                name: 'question',
                required: true
            }
        ]
    },
    {
        name: 'YouTube Video Idea Generator',
        desc: 'An AI tool that generates creative YouTube video ideas.',
        category: 'Video',
        icon: 'https://cdn-icons-png.flaticon.com/128/187/187210.png',
        aiPrompt: 'Generate creative YouTube video ideas based on the provided niche or topic.',
        slug: 'youtube-video-idea-generator',
        form: [
            {
                label: 'Enter niche or topic',
                field: 'input',
                name: 'niche',
                required: true
            }
        ]
    },
    {
        name: 'Blog Introduction Writer',
        desc: 'An AI tool that writes compelling blog introductions.',
        category: 'Blog',
        icon: 'https://cdn-icons-png.flaticon.com/128/1239/1239029.png',
        aiPrompt: 'Write a compelling blog introduction based on the provided blog topic.',
        slug: 'blog-introduction-writer',
        form: [
            {
                label: 'Enter blog topic',
                field: 'input',
                name: 'topic',
                required: true
            }
        ]
    },
    {
        name: 'Meta Description Generator',
        desc: 'An AI tool that generates SEO-friendly meta descriptions.',
        category: 'SEO',
        icon: 'https://cdn-icons-png.flaticon.com/128/2618/2618573.png',
        aiPrompt: 'Generate SEO-friendly meta descriptions based on the provided content.',
        slug: 'meta-description-generator',
        form: [
            {
                label: 'Enter content details',
                field: 'textarea',
                name: 'contentDetails',
                required: true
            }
        ]
    },
    {
        name: 'Travel Itinerary Planner',
        desc: 'An AI tool that creates detailed travel itineraries.',
        category: 'Travel',
        icon: 'https://cdn-icons-png.flaticon.com/128/3081/3081553.png',
        aiPrompt: 'Create a detailed travel itinerary based on the provided destination and preferences.',
        slug: 'travel-itinerary-planner',
        form: [
            {
                label: 'Enter destination and preferences',
                field: 'textarea',
                name: 'destinationDetails',
                required: true
            }
        ]
    },
    {
        name: 'Recipe Creator',
        desc: 'An AI tool that generates recipes based on the provided ingredients.',
        category: 'Food',
        icon: 'https://cdn-icons-png.flaticon.com/128/992/992696.png',
        aiPrompt: 'Create a recipe based on the provided ingredients.',
        slug: 'recipe-creator',
        form: [
            {
                label: 'Enter ingredients',
                field: 'textarea',
                name: 'ingredients',
                required: true
            }
        ]
    },
    {
        name: 'Lesson Plan Generator',
        desc: 'An AI tool that generates detailed lesson plans for teachers.',
        category: 'Education',
        icon: 'https://cdn-icons-png.flaticon.com/128/1087/1087840.png',
        aiPrompt: 'Generate a detailed lesson plan based on the provided subject and grade level.',
        slug: 'lesson-plan-generator',
        form: [
            {
                label: 'Enter subject and grade level',
                field: 'textarea',
                name: 'subjectDetails',
                required: true
            }
        ]
    },
    {
        name: 'Grant Proposal Writer',
        desc: 'An AI tool that writes detailed grant proposals.',
        category: 'Nonprofit',
        icon: 'https://cdn-icons-png.flaticon.com/128/2855/2855643.png',
        aiPrompt: 'Write a detailed grant proposal based on the provided project details.',
        slug: 'grant-proposal-writer',
        form: [
            {
                label: 'Enter project details',
                field: 'textarea',
                name: 'projectDetails',
                required: true
            }
        ]
    },
    {
        name: 'Business Plan Creator',
        desc: 'An AI tool that creates detailed business plans.',
        category: 'Business',
        icon: 'https://cdn-icons-png.flaticon.com/128/3474/3474381.png',
        aiPrompt: 'Create a detailed business plan based on the provided business idea and market analysis.',
        slug: 'business-plan-creator',
        form: [
            {
                label: 'Enter business idea and market analysis',
                field: 'textarea',
                name: 'businessDetails',
                required: true
            }
        ]
    },
    {
        name: 'Song Lyrics Generator',
        desc: 'An AI tool that generates song lyrics based on the provided theme or genre.',
        category: 'Music',
        icon: 'https://cdn-icons-png.flaticon.com/128/3128/3128144.png',
        aiPrompt: 'Generate song lyrics based on the provided theme or genre.',
        slug: 'song-lyrics-generator',
        form: [
            {
                label: 'Enter theme or genre',
                field: 'input',
                name: 'theme',
                required: true
            }
        ]
    },
    {
        name: 'Speech Writer',
        desc: 'An AI tool that writes speeches based on the provided occasion and details.',
        category: 'Public Speaking',
        icon: 'https://cdn-icons-png.flaticon.com/128/3143/3143460.png',
        aiPrompt: 'Write a speech based on the provided occasion and details.',
        slug: 'speech-writer',
        form: [
            {
                label: 'Enter occasion and details',
                field: 'textarea',
                name: 'occasionDetails',
                required: true
            }
        ]
    },
    {
        name: 'Product Launch Plan Generator',
        desc: 'An AI tool that creates detailed product launch plans.',
        category: 'Marketing',
        icon: 'https://cdn-icons-png.flaticon.com/128/3498/3498105.png',
        aiPrompt: 'Create a detailed product launch plan based on the provided product details.',
        slug: 'product-launch-plan-generator',
        form: [
            {
                label: 'Enter product details',
                field: 'textarea',
                name: 'productDetails',
                required: true
            }
        ]
    },
    {
        name: 'Marketing Strategy Creator',
        desc: 'An AI tool that creates comprehensive marketing strategies.',
        category: 'Marketing',
        icon: 'https://cdn-icons-png.flaticon.com/128/2975/2975163.png',
        aiPrompt: 'Create a comprehensive marketing strategy based on the provided business goals and market analysis.',
        slug: 'marketing-strategy-creator',
        form: [
            {
                label: 'Enter business goals and market analysis',
                field: 'textarea',
                name: 'businessGoals',
                required: true
            }
        ]
    },
    {
        name: 'Book Title Generator',
        desc: 'An AI tool that generates book titles based on the provided genre and plot.',
        category: 'Writing',
        icon: 'https://cdn-icons-png.flaticon.com/128/2087/2087584.png',
        aiPrompt: 'Generate book titles based on the provided genre and plot.',
        slug: 'book-title-generator',
        form: [
            {
                label: 'Enter genre and plot',
                field: 'textarea',
                name: 'genrePlot',
                required: true
            }
        ]
    },
    {
        name: 'Character Profile Creator',
        desc: 'An AI tool that creates detailed character profiles for stories.',
        category: 'Writing',
        icon: 'https://cdn-icons-png.flaticon.com/128/1503/1503805.png',
        aiPrompt: 'Create a detailed character profile based on the provided character traits and backstory.',
        slug: 'character-profile-creator',
        form: [
            {
                label: 'Enter character traits and backstory',
                field: 'textarea',
                name: 'characterDetails',
                required: true
            }
        ]
    },
]
export default templates;