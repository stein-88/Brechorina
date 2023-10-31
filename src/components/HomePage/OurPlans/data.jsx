import React from 'react'
import s from './OurPlans.scss'
 
const schema = [
    {
        title: 'Taking Items',
        refer: 'taking',
        price: <span className={`${s.fwBold} h-lg-2 h5`}>Free</span>,
        btn: {
            text: 'Sign up',
            customClass: `py-1 ${s.bold} px-4`,
            ref: 'taking',
        },
        expandCol: [
            [
                {
                    text: 'Who\'s it for:',
                    className: `${s.bold} h5 mb-1`,
                },
                {
                    text: 'It is always free to register, request and take items.',
                    className: 'mb-4',
                },
                {
                    text: 'Simply sign up and start searching for items.',
                    className: 'mb-0',
                },
            ],
            [
                {
                    text: <span className={`${s.fwBold} h-lg-2 h5`}>Free</span>,
                    className: `${s.arial} mb-0`,
                },
            ],
        ],
    },
    {
        title: 'Ad Hoc Listings',
        refer: 'adhoc',
        price: <span><span className={`${s.fwBold} h-lg-2 h5`}>£10</span> per item (up to 5 items)</span>,
        btn: {
            text: 'Sign up',
            customClass: `py-1 ${s.bold} px-4`,
            ref: 'adhoc',
        },
        expandCol: [
            [
                {
                    text: 'Who\'s it for:',
                    className: `${s.bold} h5 mb-1`,
                },
                {
                    text: 'if you\'re a non-profit, an individual, or a micro business with less than 10 employees and just a few items to donate, this is the plan for you.',
                    className: 'mb-4',
                },
                {
                    text: 'Our marketplace is easy to use and navigate. In a few simple steps your item is listed, requested and off to its new home.',
                    className: 'mb-0',
                },
            ],
            [
                {
                    text: 'Price:',
                    className: `${s.bold} h5 mb-1`,
                },
                {
                    text: <span><span className={`${s.fwBold} h-lg-2 h5`}>£10</span> per item</span>,
                    className: `${s.arial} mb-4`,
                },
                {
                    text: 'What is included:',
                    className: `${s.bold} h5 mb-1`,
                },
                {
                    text: 'Maximum of 5 items listed per annum',
                    className: 'mb-0',
                },
                {
                    text: '1 location only',
                    className: 'mb-4',
                },
                {
                    text: 'What is excluded:',
                    className: `${s.bold} h5 mb-1`,
                },
                {
                    text: 'No access to reports or ESG data',
                    className: 'mb-0',
                },
            ],
        ],
    },
    {
        title: 'Business Plan',
        refer: 'bizzpro',
        price: <span><span className={`${s.fwBold} h-lg-2 h5`}>£500</span> per annum (Max 100 items)</span>,
        btn: {
            text: 'Sign up',
            customClass: `py-1 ${s.bold} px-4`,
            ref: 'business',
        },
        expandCol: [
            [
                {
                    text: 'Who\'s it for:',
                    className: `${s.bold} h5 mb-1`,
                },
                {
                    text: 'If you\'re a small business with less than 10 employees and up to 100 chairs, desks or even lost and found items* to list over the year, this plan is perfect for you.',
                    className: 'mb-4',
                },
                {
                    text: 'It\'s a great way to reduce your waste while making an impact.',
                    className: 'mb-4',
                },
                {
                    text: <small><em>*Excludes bulk items such as carpet tiles, flooring, fabric, tiles, pallets.</em></small>,
                    className: 'mb-0',
                },
            ],
            [
                {
                    text: 'Price:',
                    className: `${s.bold} h5 mb-1`,
                },
                {
                    text: <span><span className={`${s.fwBold} h-lg-2 h5`}>£500</span> per annum</span>,
                    className: `${s.arial} mb-4`,
                },
                {
                    text: 'What is included:',
                    className: `${s.bold} h5 mb-1`,
                },
                {
                    text: 'Maximum of 100 items per annum',
                    className: 'mb-0',
                },
                {
                    text: 'Multi location use',
                    className: 'mb-4',
                },
                {
                    text: 'What is excluded:',
                    className: `${s.bold} h5 mb-1`,
                },
                {
                    text: 'No access to reports or ESG data',
                    className: 'mb-0',
                },
            ],
        ],
    }, 
    {
        title: 'Refurbishments, Construction Projects and Strip-Outs',
        refer: 'refurb',
        smTitle: true,
        price: <span><span className={`${s.fwBold} h5`}>Bespoke</span>, based on the size of the project</span>,
        btn: {
            text: 'Get a quote',
            customClass: `py-1 ${s.bold} px-4`,
            ref: 'contactus',
        },
        expandCol: [
            [
                {
                    text: 'Who\'s it for:',
                    className: `${s.bold} h5 mb-1`,
                },
                {
                    text: 'If you have a construction, refurbishment, decommission or strip-out project, this is the plan for you. With this plan, you have the flexibility to list unlimited items and work within your deadlines.',
                    className: 'mb-4',
                },
                {
                    text: 'Additionally, you can easily meet your reuse and tender goals and even generate an ESG data report.',
                    className: 'mb-4',
                },
                {
                    text: 'Our easy to use dashboard helps to ensure that your project runs smoothly and efficiently.',
                    className: 'mb-0',
                },
            ],
            [
                {
                    text: 'Price:',
                    className: `${s.bold} h5 mb-1`,
                },
                {
                    text: <span><span className={`${s.fwBold} h6`}>Bespoke</span>, based on requirements</span>,
                    className: `${s.arial} mb-4`,
                },
                {
                    text: 'What is included:',
                    className: `${s.bold} h5 mb-1`,
                },
                {
                    text: 'Unlimited listings & items',
                    className: 'mb-0',
                },
                {
                    text: 'PDF report with select ESG data metrics',
                    className: 'mb-4',
                },
                {
                    text: 'What is excluded:',
                    className: `${s.bold} h5 mb-1`,
                },
                {
                    text: 'Detailed report analysis ',
                    className: 'mb-0',
                },
            ],
        ],
    },
    {
        title: 'Enterprise',
        refer: 'enterprise',
        price: <span><span className={`${s.fwBold} h5`}>Bespoke</span>, based on the size of the project</span>,
        btn: {
            text: 'Get a quote',
            customClass: `py-1 ${s.bold} px-4`,
            ref: 'contactus',
        },
        expandCol: [
            [
                {
                    text: 'Who\'s it for:',
                    className: `${s.bold} h5 mb-1`,
                },
                {
                    text: 'This plan is ideal for organisations with one or multiple locations that want to list unlimited items over the year.',
                    className: 'mb-4',
                },
                {
                    text: 'You can choose from external reuse, internal reuse, and asset management, or even loaning or combining product solutions tailored to your unique requirements.',
                    className: 'mb-4',
                },
                {
                    text: 'Plus, you\'ll have access to the entire product offering of the marketplace, which includes detailed ESG data reports.',
                    className: 'mb-0',
                },
            ],
            [
                {
                    text: 'Price:',
                    className: `${s.bold} h5 mb-1`,
                },
                {
                    text: <span><span className={`${s.fwBold} h6`}>Bespoke</span>, based on requirements</span>,
                    className: `${s.arial} mb-4`,
                },
                {
                    text: 'What is included:',
                    className: `${s.bold} h5 mb-1`,
                },
                {
                    text: 'Unlimited listings & items External & Internal reuse options',
                    className: 'mb-0',
                },
                {
                    text: 'All ESG metrics including report analysis',
                    className: 'mb-4',
                },
                {
                    text: 'API Integrations',
                    className: 'mb-4',
                },
            ],
        ],
    },
    {
        title: 'Non-Profit & Individual Data Membership',
        refer: 'nonprofit',
        smTitle: true,
        price: <span><span className={`${s.fwBold} h-lg-2 h5`}>£60</span> for 6 months*</span>,
        btn: {
            text: 'Sign up',
            customClass: `py-1 ${s.bold} px-4`,
            ref: 'nonprofit',
        },
        expandCol: [
            [
                {
                    text: 'Who\'s it for:',
                    className: `${s.bold} h5 mb-1`,
                },
                {
                    text: 'Specially for our non-profits and individual members who want access to their data.',
                    className: 'mb-4',
                },
                {
                    text: 'With this plan, you can quickly obtain financial and tax reporting information and be the first to hear about exclusive trials and member offers.',
                    className: 'mb-4',
                },
                {
                    text: 'It\'s a great way to stay informed and get the most out of being a Globechainer.',
                    className: 'mb-0',
                },
            ],
            [
                {
                    text: 'Price:',
                    className: `${s.bold} h5 mb-1`,
                },
                {
                    text: <span><span className={`${s.fwBold} h-lg-2 h5`}>£60</span> for 6 months*</span>,
                    className: `${s.arial} mb-4`,
                },
                {
                    text: 'What is included:',
                    className: `${s.bold} h5 mb-1`,
                },
                {
                    text: 'Access to ESG data reports',
                    className: 'mb-0',
                },
                {
                    text: 'Invited to partake in exclusive trials',
                    className: 'mb-0',
                },
                {
                    text: 'Maximum of 5 items listed per annum',
                    className: 'mb-4',
                },
                {
                    text: <small className={s.arial}><em>*Minimum 6 month subscription, thereafter monthly renewal at £10 per month and option to cancel</em></small>,
                    className: 'mb-0',
                },
            ],
        ],
    },
]

export default schema
