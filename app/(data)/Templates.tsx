export default [
    {
        name : 'Blog Title',
        desc : 'An AI tool that generate the blog title based on your blog',
        category : 'Blog',
        icon : 'https://cdn-icons-png.flaticon.com/128/4186/4186534.png',
        aiPrompt : 'Give me 5 topic idea in bullet based on topic and give niche and topic result in text editor format',
        slug : 'generate-blog-title',
        form:[
            {
                label : 'Enter Your blog niche',
                field : 'input',
                name : 'niche',
                required:true
            },
            {
                label : 'Enter Blog Outline',
                field : 'textarea',
                name : 'outline'
            }
        ]
    },
    {
        name: 'Content Summarizer',
        desc: 'An AI tool that summarizes your content efficiently.',
        category: 'Content',
        icon: 'https://cdn-icons-png.flaticon.com/128/2620/2620610.png',
        aiPrompt: 'Summarize the given content into a concise paragraph.',
        slug: 'content-summarizer',
        form: [
            {
                label: 'Enter your content',
                field: 'textarea',
                name: 'content',
                required: true
            }
        ]
    },
    {
        name: 'SEO Keyword Generator',
        desc: 'An AI tool that generates SEO-friendly keywords based on your content.',
        category: 'SEO',
        icon: 'https://cdn-icons-png.flaticon.com/128/1040/1040281.png',
        aiPrompt: 'Generate a list of SEO keywords based on the given content.',
        slug: 'seo-keyword-generator',
        form: [
            {
                label: 'Enter your content',
                field: 'textarea',
                name: 'content',
                required: true
            }
        ]
    },
    {
        name: 'Social Media Post Ideas',
        desc: 'An AI tool that generates engaging social media post ideas based on your topic.',
        category: 'Social Media',
        icon: 'https://cdn-icons-png.flaticon.com/128/2111/2111463.png',
        aiPrompt: 'Give me 5 engaging social media post ideas based on the topic provided.',
        slug: 'social-media-post-ideas',
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
        name: 'Email Subject Line Generator',
        desc: 'An AI tool that creates compelling email subject lines.',
        category: 'Email',
        icon: 'https://cdn-icons-png.flaticon.com/128/893/893257.png',
        aiPrompt: 'Generate 5 compelling email subject lines based on the given content.',
        slug: 'email-subject-line-generator',
        form: [
            {
                label: 'Enter your email content',
                field: 'textarea',
                name: 'content',
                required: true
            }
        ]
    },
    {
        name: 'Product Description Writer',
        desc: 'An AI tool that writes persuasive product descriptions.',
        category: 'E-commerce',
        icon: 'https://cdn-icons-png.flaticon.com/128/3022/3022789.png',
        aiPrompt: 'Write a persuasive product description based on the provided product details.',
        slug: 'product-description-writer',
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
        name: 'Creative Writing Prompts',
        desc: 'An AI tool that generates creative writing prompts to inspire writers.',
        category: 'Writing',
        icon: 'https://cdn-icons-png.flaticon.com/128/1019/1019123.png',
        aiPrompt: 'Generate 5 creative writing prompts based on the given theme.',
        slug: 'creative-writing-prompts',
        form: [
            {
                label: 'Enter a theme or genre',
                field: 'input',
                name: 'theme',
                required: true
            }
        ]
    },
    {
        name: 'Press Release Generator',
        desc: 'An AI tool that crafts professional press releases based on your inputs.',
        category: 'Public Relations',
        icon: 'https://cdn-icons-png.flaticon.com/128/1055/1055687.png',
        aiPrompt: 'Create a professional press release based on the provided event details.',
        slug: 'press-release-generator',
        form: [
            {
                label: 'Enter event details',
                field: 'textarea',
                name: 'eventDetails',
                required: true
            }
        ]
    }
        
]