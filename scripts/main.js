// -------------------------------------
// vue app
// -------------------------------------


const app = Vue.createApp({
  data() {
    return {
    
      // the date my career started (change to yours)
      careerStartDate: 2012,

      // the date copyright started (change to yours)
      copyrightStartDate: 2021,

      // for the template theme
      appTheme: 'light_theme',
      savedTheme: null,

      // flag to toggle the preloader
      isPreloading: true,

      // toast notifications array
      notifications: [],

      // manage loading spinner status
      ajaxLoading: [],

      // for minimizing the header on scrolling down
      startMinimizingHeaderAt: 100,
      isHeaderBig: true,
      // for toggling the header on scrolling down
      lastScrollPosition: 0,
      isHeaderHidden: false,
      // for scroll to top button
      startShowingScrollTopBtnAt: 600,
      isScrollTopBtnDisplayed: false,

      // flag to toggle focus style class
      isAnyFocus: false,

      // flag to toggle nav menu
      isNavMenuOpen: false,

      // list of nav links to loop through it
      navLinks: [
        {
          url: '#hero',
          title: { en: 'Home', ar: 'الرئيسية' }
        }, {
          url: '#about',
          title: { en: 'About', ar: 'من أنا' }
        }, {
          url: '#skills',
          title: { en: 'Skills', ar: 'مهاراتي' }
        }, {
          url: '#portfolio',
          title: { en: 'Portfolio', ar: 'أعمالي' }
        }, {
          url: '#contact',
          title: { en: 'Contact', ar: 'اتصل بي' }
        }
      ],

      // flag to toggle between skills and tools in skills section
      isSkillsOrTools: 'skills',

      // list of skills items to loop through it
      skillsItems: [
        {
          imgUrl: 'assets/images/skills/aem.png',
          title: 'AEM'
        },
        {
          imgUrl: 'assets/images/skills/html5.png',
          title: 'HTML5'
        }, {
          imgUrl: 'assets/images/skills/css3.png',
          title: 'CSS3'
        }, {
          imgUrl: 'assets/images/skills/javascript.png',
          title: 'JavaScript'
        }, {
          imgUrl: 'assets/images/skills/typescript.png',
          title: 'TypeScript'
        }, {
          imgUrl: 'assets/images/skills/jquery.png',
          title: 'jQuery'
        }, {
          imgUrl: 'assets/images/skills/bootstrap.png',
          title: 'Bootstrap'
        }, {
          imgUrl: 'assets/images/skills/angular.png',
          title: 'Angular'
        }, {
          imgUrl: 'assets/images/skills/react.png',
          title: 'React'
        }, {
          imgUrl: 'assets/images/skills/vue.png',
          title: 'Vue'
        }, {
          imgUrl: 'assets/images/skills/firebase.png',
          title: 'Firebase'
        }, {
          imgUrl: 'assets/images/skills/node.svg',
          title: 'Node js'
        },{
          imgUrl: 'assets/images/skills/mongo.svg',
          title: 'Mongo DB'
        }, {
          imgUrl: 'assets/images/skills/sass.png',
          title: 'SASS'
        },
        {
          imgUrl: 'assets/images/skills/web-accessiblity.jpeg',
          title: 'Web Accessiblity'
        }
      ],

      // list of tools items to loop through it
      toolsItems: [
        {
          imgUrl: 'assets/images/skills/ajax.png',
          title: 'Ajax'
        }, {
          imgUrl: 'assets/images/skills/gulp.png',
          title: 'Gulp'
        }, {
          imgUrl: 'assets/images/skills/webpack.png',
          title: 'Webpack'
        }, {
          imgUrl: 'assets/images/skills/git.png',
          title: 'Git (Github)'
        }, {
          imgUrl: 'assets/images/skills/npm.png',
          title: 'Npm'
        }, {
          imgUrl: 'assets/images/skills/command.png',
          title: 'Command Line'
        }, {
          imgUrl: 'assets/images/skills/vs-code.png',
          title: 'VS Code'
        }, {
          imgUrl: 'assets/images/skills/trello.png',
          title: 'Trello'
        },  {
          imgUrl: 'assets/images/skills/slack.png',
          title: 'Slack'
        }, {
          imgUrl: 'assets/images/skills/photoshop.png',
          title: 'Photoshop'
        },
      ],

      // list of experience items to loop through it
      experienceItems: [
        {
          date: '2012',
          companyName: { en: 'Electronic Arts', ar: 'شركة جوجل' },
          jobTitle: { en: 'Software Developer', ar: 'مطور الواجهة الأمامية' },
          desc: {
            en: `Develop small modules of mobile games, Support bug fixes, and performance issues, Collect requirements, and technical analyze the task before implementation and estimate the efforts and Design, build and maintain efficient, reusable, and reliable code.`,
            ar: 'مراقبة الجوانب الفنية لتطوير الواجهات الأمامية للمشاريع.'
          }
        }, {
          date: '2013',
          companyName: { en: 'TechAspect Solutions Pvt Ltd.', ar: 'شركة فيسبوك' },
          jobTitle: { en: 'UI Developer', ar: 'مطوّر الويب المتكامل' },
          desc: {
            en: `Collect requirements, and technical analysis of the task before implementation and estimate the efforts. To do code review and to ensure we deliver the right quality. Actively participate in Agile methodology practices, and Resolve the Bugs in the short turn- around time, Develop, customize mobile/UI applications using Angular Js, AEM, HTML 5, etc, Design, build and maintain efficiency, reusable, and reliable code. Developed tools like Resume Builder, job search, Cover letter, interview preparation`,
            ar: 'تعاونت مع الفرق الإبداعية في تطوير وتنفيذ أفكار مبتكرة.'
          }
        }, {
          date: '2015',
          companyName: { en: 'RealPage Inc.', ar: 'شركة انفاتو' },
          jobTitle: { en: 'Senior UI/UX Developer', ar: 'مطور UI/UX' },
          desc: {
            en: `Developed varieties of tools for property managers enrolled with the Realpage product 'lease star', wherein they can plan their property, property map, floorplan, etc. Developing the leasestar product on Angular Platform, Got stakeholder appreciation on rendering exemplary performances towards module, development independently which involved high rich UI technologies. Develop, customize mobile/UI applications using Angular Js, HTML 5 etc,Design , build and maintain efficient, reusable and reliable code.`,
            ar: 'تم تحويل تخطيطات Photoshop إلى صفحات ويب باستخدام HTML و CSS و JavaScript.'
          }
        }, {
          date: '2018',
          companyName: { en: 'TA Digital', ar: 'شركة جوجل' },
          jobTitle: { en: 'Principal Front-End Developer', ar: 'مطور الواجهة الأمامية' },
          desc: {
            en: `Develop, customize mobile/UI applications using React Js, Redux, AEM, HTML 5, etc, Build pixel-perfect UIs across mobile and web platforms using ReactJS Design, Responsible for delivery of assigned module/ components /phases of a project responsible to work very closely with key business & data analysts and technology teams Leading a team of 6 developers in a sprint-based model for task management Provide technical oversight to onshore and offshore design and development effort`,
            ar: 'مراقبة الجوانب الفنية لتطوير الواجهات الأمامية للمشاريع.'
          }
        },{
          date: '2019',
          companyName: { en: 'TA Digital', ar: 'شركة جوجل' },
          jobTitle: { en: 'Associate Front-End Developer Lead', ar: 'مطور الواجهة الأمامية' },
          desc: {
            en: `Develop, customize mobile/UI applications using React Js, Redux, AEM, HTML 5, etc, Build pixel-perfect UIs across mobile and web platforms using ReactJS Design, Responsible for delivery of assigned module/ components /phases of a project responsible to work very closely with key business & data analysts and technology teams Leading a team of 6 developers in a sprint-based model for task management Provide technical oversight to onshore and offshore design and development effort`,
            ar: 'مراقبة الجوانب الفنية لتطوير الواجهات الأمامية للمشاريع.'
          }
        },{
          date: '2021',
          companyName: { en: 'TA Digital', ar: 'شركة جوجل' },
          jobTitle: { en: 'Technical Front-End Developer Lead', ar: 'مطور الواجهة الأمامية' },
          desc: {
            en: ` Collect requirements, and technical analysis of the task before implementation and estimate the efforts. Design, build and maintain efficient, reusable, and reliable code. Leading a team of 10 developers in a sprint-based model for task management. Develop, customize mobile/UI applications using React Js, Redux, AEM, HTML 5, etc. Collaborate and build relationships with other development team members. Responsible for delivery of assigned module/ components /phases of a project`,
            ar: 'مراقبة الجوانب الفنية لتطوير الواجهات الأمامية للمشاريع.'
          }
        },   {}, {}
      ],

      // filter type for items in portfolio section
      worksFilter: 'all',

      // list of portfolio items to loop through it
      allPortfolioItems: [
        {
          id: 1,
          url: 'single-portfolio.html?id=1',
          imgUrl: 'assets/images/portfolio/portfolio-1.png',
          title: { en: 'AARP Staying Sharp', ar: 'هنا عنوان المشروع 1' },
          date: { en: 'April 2019', ar: 'أبريل 2021' },
          desc: {
            en: 'Staying Sharp is a program that provides evidence-based information and actions you can take to maintain and improve your brain health as you age. Choose from articles, recipes, activities, videos and fun brain games designed to fit into your daily routine. Create your own plan by saving the actions that inspire you.',
            ar: 'هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها التطبيق. إذا كنت تحتاج إلى عدد أكبر من الفقرات يتيح لك مولد النص العربى زيادة عدد الفقرات كما تريد، النص لن يبدو مقسما ولا يحوي أخطاء لغوية، مولد النص العربى مفيد لمصممي المواقع على وجه الخصوص، حيث يحتاج العميل فى كثير من الأحيان أن يطلع على صورة حقيقية لتصميم الموقع. ومن هنا وجب على المصمم أن يضع نصوصا مؤقتة على التصميم ليظهر للعميل الشكل كاملاً، دور مولد النص العربى أن يوفر على المصمم عناء البحث عن نص بديل لا علاقة له بالموضوع الذى يتحدث عنه التصميم فيظهر بشكل لا يليق.'
          },
          category: 'React',
          tools: ['HTML', 'React Js', 'AEM Contexthub', 'AEM', 'CSS', 'SCSS', 'JavaScript', 'Webpack', 'deque'],
          screenshots: {
            img1: {
              url: 'assets/images/single-portfolio/single-portfolio-5.png',
              caption: { en: 'caption 5', ar: 'تسمية توضيحية 5' }
            },
            img2: {
              url: 'assets/images/single-portfolio/single-portfolio-4.png',
              caption: { en: 'caption 4', ar: 'تسمية توضيحية 4' }
            },
            img3: {
              url: 'assets/images/single-portfolio/single-portfolio-3.png',
              caption: { en: 'caption 3', ar: 'تسمية توضيحية 3' }
            },
            img4: {
              url: 'assets/images/single-portfolio/single-portfolio-2.png',
              caption: { en: 'caption 2', ar: 'تسمية توضيحية 2' }
            },
            img5: {
              url: 'assets/images/single-portfolio/single-portfolio-1.png',
              caption: { en: 'caption 1', ar: 'تسمية توضيحية 1' }
            }
          }
        }, {
          id: 2,
          url: 'single-portfolio.html?id=2',
          imgUrl: 'assets/images/portfolio/portfolio-2.png',
          title: { en: 'Redawning', ar: 'هنا عنوان المشروع 2' },
          date: { en: 'April 2018', ar: 'أبريل 2021' },
          desc: {
            en: 'vacation rental partner to the travel industry.RedAwning is password protected booking tool that gives travel advisors, tour operators, and other industry partners access to over 140,000 vacation rentals worldwide.',
            ar: 'هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها التطبيق. إذا كنت تحتاج إلى عدد أكبر من الفقرات يتيح لك مولد النص العربى زيادة عدد الفقرات كما تريد، النص لن يبدو مقسما ولا يحوي أخطاء لغوية، مولد النص العربى مفيد لمصممي المواقع على وجه الخصوص، حيث يحتاج العميل فى كثير من الأحيان أن يطلع على صورة حقيقية لتصميم الموقع. ومن هنا وجب على المصمم أن يضع نصوصا مؤقتة على التصميم ليظهر للعميل الشكل كاملاً، دور مولد النص العربى أن يوفر على المصمم عناء البحث عن نص بديل لا علاقة له بالموضوع الذى يتحدث عنه التصميم فيظهر بشكل لا يليق.'
          },
          category: 'React',
          tools: ['HTML', 'React', 'CSS', 'Less', 'JavaScript', 'TypeScript', 'AJAX', 'NodeJs', 'MongoDB'],
          screenshots: {
            img1: {
              url: 'assets/images/single-portfolio/single-portfolio-5.png',
              caption: { en: 'caption 5', ar: 'تسمية توضيحية 5' }
            },
            img2: {
              url: 'assets/images/single-portfolio/single-portfolio-4.png',
              caption: { en: 'caption 4', ar: 'تسمية توضيحية 4' }
            },
            img3: {
              url: 'assets/images/single-portfolio/single-portfolio-3.png',
              caption: { en: 'caption 3', ar: 'تسمية توضيحية 3' }
            },
            img4: {
              url: 'assets/images/single-portfolio/single-portfolio-2.png',
              caption: { en: 'caption 2', ar: 'تسمية توضيحية 2' }
            },
            img5: {
              url: 'assets/images/single-portfolio/single-portfolio-1.png',
              caption: { en: 'caption 1', ar: 'تسمية توضيحية 1' }
            }
          }
        }, {
          id: 3,
          url: 'single-portfolio.html?id=3',
          imgUrl: 'assets/images/portfolio/portfolio-3.png',
          title: { en: 'Leasestar Marketing', ar: 'هنا عنوان المشروع 3' },
          date: { en: 'April 2015', ar: 'أبريل 2021' },
          desc: {
            en: 'RealPage provides a technology platform that enables real estate owners and managers to change how people experience and use rental space. Clients use the platform to gain transparency into asset performance, leverage data insights and monetize space to create incremental yields.',
            ar: 'هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها التطبيق. إذا كنت تحتاج إلى عدد أكبر من الفقرات يتيح لك مولد النص العربى زيادة عدد الفقرات كما تريد، النص لن يبدو مقسما ولا يحوي أخطاء لغوية، مولد النص العربى مفيد لمصممي المواقع على وجه الخصوص، حيث يحتاج العميل فى كثير من الأحيان أن يطلع على صورة حقيقية لتصميم الموقع. ومن هنا وجب على المصمم أن يضع نصوصا مؤقتة على التصميم ليظهر للعميل الشكل كاملاً، دور مولد النص العربى أن يوفر على المصمم عناء البحث عن نص بديل لا علاقة له بالموضوع الذى يتحدث عنه التصميم فيظهر بشكل لا يليق.'
          },
          category: 'Angular',
          tools: ['HTML', 'Angular', 'CSS', 'SCSS', 'JavaScript', 'Gulp', 'Materialize', 'AJAX'],
          screenshots: {
            img1: {
              url: 'assets/images/single-portfolio/single-portfolio-5.png',
              caption: { en: 'caption 5', ar: 'تسمية توضيحية 5' }
            },
            img2: {
              url: 'assets/images/single-portfolio/single-portfolio-4.png',
              caption: { en: 'caption 4', ar: 'تسمية توضيحية 4' }
            },
            img3: {
              url: 'assets/images/single-portfolio/single-portfolio-3.png',
              caption: { en: 'caption 3', ar: 'تسمية توضيحية 3' }
            },
            img4: {
              url: 'assets/images/single-portfolio/single-portfolio-2.png',
              caption: { en: 'caption 2', ar: 'تسمية توضيحية 2' }
            },
            img5: {
              url: 'assets/images/single-portfolio/single-portfolio-1.png',
              caption: { en: 'caption 1', ar: 'تسمية توضيحية 1' }
            }
          }
        }, {
          id: 4,
          url: 'single-portfolio.html?id=4',
          imgUrl: 'assets/images/portfolio/portfolio-4.png',
          title: { en: 'Apollo Edu', ar: 'هنا عنوان المشروع 4' },
          date: { en: 'March 2014', ar: 'أبريل 2021' },
          desc: {
            en: 'The apollo edu is an open-enrollment institution of higher Learning There students study online on their campus solutions.',
            ar: 'هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها التطبيق. إذا كنت تحتاج إلى عدد أكبر من الفقرات يتيح لك مولد النص العربى زيادة عدد الفقرات كما تريد، النص لن يبدو مقسما ولا يحوي أخطاء لغوية، مولد النص العربى مفيد لمصممي المواقع على وجه الخصوص، حيث يحتاج العميل فى كثير من الأحيان أن يطلع على صورة حقيقية لتصميم الموقع. ومن هنا وجب على المصمم أن يضع نصوصا مؤقتة على التصميم ليظهر للعميل الشكل كاملاً، دور مولد النص العربى أن يوفر على المصمم عناء البحث عن نص بديل لا علاقة له بالموضوع الذى يتحدث عنه التصميم فيظهر بشكل لا يليق.'
          },
          category: 'HTML',
          tools: ['HTML', 'Slim', 'CSS', 'Less', 'JavaScript', 'TypeScript', 'TailwindCSS', 'AJAX', 'Angular', 'NodeJs', 'MongoDB'],
          screenshots: {
            img1: {
              url: 'assets/images/single-portfolio/single-portfolio-5.png',
              caption: { en: 'caption 5', ar: 'تسمية توضيحية 5' }
            },
            img2: {
              url: 'assets/images/single-portfolio/single-portfolio-4.png',
              caption: { en: 'caption 4', ar: 'تسمية توضيحية 4' }
            },
            img3: {
              url: 'assets/images/single-portfolio/single-portfolio-3.png',
              caption: { en: 'caption 3', ar: 'تسمية توضيحية 3' }
            },
            img4: {
              url: 'assets/images/single-portfolio/single-portfolio-2.png',
              caption: { en: 'caption 2', ar: 'تسمية توضيحية 2' }
            },
            img5: {
              url: 'assets/images/single-portfolio/single-portfolio-1.png',
              caption: { en: 'caption 1', ar: 'تسمية توضيحية 1' }
            }
          }
        }, {
          id: 5,
          url: 'single-portfolio.html?id=5',
          imgUrl: 'assets/images/portfolio/portfolio-5.png',
          title: { en: 'University of Phenoix', ar: 'هنا عنوان المشروع 5' },
          date: { en: 'April 2013', ar: 'أبريل 2021' },
          desc: {
            en: 'The University of Phoenix is an open-enrollment institution of higher Learning There students study online on their campus solutions.',
            ar: 'هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها التطبيق. إذا كنت تحتاج إلى عدد أكبر من الفقرات يتيح لك مولد النص العربى زيادة عدد الفقرات كما تريد، النص لن يبدو مقسما ولا يحوي أخطاء لغوية، مولد النص العربى مفيد لمصممي المواقع على وجه الخصوص، حيث يحتاج العميل فى كثير من الأحيان أن يطلع على صورة حقيقية لتصميم الموقع. ومن هنا وجب على المصمم أن يضع نصوصا مؤقتة على التصميم ليظهر للعميل الشكل كاملاً، دور مولد النص العربى أن يوفر على المصمم عناء البحث عن نص بديل لا علاقة له بالموضوع الذى يتحدث عنه التصميم فيظهر بشكل لا يليق.'
          },
          category: 'Angular',
          tools: ['HTML', 'Angular', 'CSS', 'SCSS', 'JavaScript', 'Gulp', 'Bootstrap', 'AJAX', 'AEM'],
          screenshots: {
            img1: {
              url: 'assets/images/single-portfolio/single-portfolio-5.png',
              caption: { en: 'caption 5', ar: 'تسمية توضيحية 5' }
            },
            img2: {
              url: 'assets/images/single-portfolio/single-portfolio-4.png',
              caption: { en: 'caption 4', ar: 'تسمية توضيحية 4' }
            },
            img3: {
              url: 'assets/images/single-portfolio/single-portfolio-3.png',
              caption: { en: 'caption 3', ar: 'تسمية توضيحية 3' }
            },
            img4: {
              url: 'assets/images/single-portfolio/single-portfolio-2.png',
              caption: { en: 'caption 2', ar: 'تسمية توضيحية 2' }
            },
            img5: {
              url: 'assets/images/single-portfolio/single-portfolio-1.png',
              caption: { en: 'caption 1', ar: 'تسمية توضيحية 1' }
            }
          }
        }, {
          id: 6,
          url: 'single-portfolio.html?id=6',
          imgUrl: 'assets/images/portfolio/portfolio-6.png',
          title: { en: 'Paychex', ar: 'هنا عنوان المشروع 6' },
          date: { en: 'july 2012', ar: 'أبريل 2021' },
          desc: {
            en: 'Paychex has HR solutions to fit the needs of any size business, from startup to enterprise. Let Paychex help you take your business where it needs to go.',
            ar: 'هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها التطبيق. إذا كنت تحتاج إلى عدد أكبر من الفقرات يتيح لك مولد النص العربى زيادة عدد الفقرات كما تريد، النص لن يبدو مقسما ولا يحوي أخطاء لغوية، مولد النص العربى مفيد لمصممي المواقع على وجه الخصوص، حيث يحتاج العميل فى كثير من الأحيان أن يطلع على صورة حقيقية لتصميم الموقع. ومن هنا وجب على المصمم أن يضع نصوصا مؤقتة على التصميم ليظهر للعميل الشكل كاملاً، دور مولد النص العربى أن يوفر على المصمم عناء البحث عن نص بديل لا علاقة له بالموضوع الذى يتحدث عنه التصميم فيظهر بشكل لا يليق.'
          },
          category: 'HTML',
          tools: ['HTML', 'Perl', 'CSS', 'Less', 'JavaScript', 'TypeScript', 'Materialize', 'AJAX', 'TeamSite'],
          screenshots: {
            img1: {
              url: 'assets/images/single-portfolio/single-portfolio-5.png',
              caption: { en: 'caption 5', ar: 'تسمية توضيحية 5' }
            },
            img2: {
              url: 'assets/images/single-portfolio/single-portfolio-4.png',
              caption: { en: 'caption 4', ar: 'تسمية توضيحية 4' }
            },
            img3: {
              url: 'assets/images/single-portfolio/single-portfolio-3.png',
              caption: { en: 'caption 3', ar: 'تسمية توضيحية 3' }
            },
            img4: {
              url: 'assets/images/single-portfolio/single-portfolio-2.png',
              caption: { en: 'caption 2', ar: 'تسمية توضيحية 2' }
            },
            img5: {
              url: 'assets/images/single-portfolio/single-portfolio-1.png',
              caption: { en: 'caption 1', ar: 'تسمية توضيحية 1' }
            }
          }
        }, {
          id: 7,
          url: 'single-portfolio.html?id=7',
          imgUrl: 'assets/images/portfolio/portfolio-7.png',
          title: { en: 'BWW Wedding Planner', ar: 'هنا عنوان المشروع 7' },
          date: { en: 'August 2013', ar: 'أبريل 2021' },
          desc: {
            en: 'BWW wedding planner is company based on India provides various wedding events services',
            ar: 'هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها التطبيق. إذا كنت تحتاج إلى عدد أكبر من الفقرات يتيح لك مولد النص العربى زيادة عدد الفقرات كما تريد، النص لن يبدو مقسما ولا يحوي أخطاء لغوية، مولد النص العربى مفيد لمصممي المواقع على وجه الخصوص، حيث يحتاج العميل فى كثير من الأحيان أن يطلع على صورة حقيقية لتصميم الموقع. ومن هنا وجب على المصمم أن يضع نصوصا مؤقتة على التصميم ليظهر للعميل الشكل كاملاً، دور مولد النص العربى أن يوفر على المصمم عناء البحث عن نص بديل لا علاقة له بالموضوع الذى يتحدث عنه التصميم فيظهر بشكل لا يليق.'
          },
          category: 'HTML',
          tools: ['HTML', 'CSS', 'SCSS', 'JavaScript', 'Gulp', 'Bootstrap', 'AJAX'],
          screenshots: {
            img1: {
              url: 'assets/images/single-portfolio/single-portfolio-5.png',
              caption: { en: 'caption 5', ar: 'تسمية توضيحية 5' }
            },
            img2: {
              url: 'assets/images/single-portfolio/single-portfolio-4.png',
              caption: { en: 'caption 4', ar: 'تسمية توضيحية 4' }
            },
            img3: {
              url: 'assets/images/single-portfolio/single-portfolio-3.png',
              caption: { en: 'caption 3', ar: 'تسمية توضيحية 3' }
            },
            img4: {
              url: 'assets/images/single-portfolio/single-portfolio-2.png',
              caption: { en: 'caption 2', ar: 'تسمية توضيحية 2' }
            },
            img5: {
              url: 'assets/images/single-portfolio/single-portfolio-1.png',
              caption: { en: 'caption 1', ar: 'تسمية توضيحية 1' }
            }
          }
        }, {
          id: 8,
          url: 'single-portfolio.html?id=8',
          imgUrl: 'assets/images/portfolio/portfolio-4.png',
          title: { en: 'Lorem Ipsum Dolor 8', ar: 'هنا عنوان المشروع 8' },
          date: { en: 'April 2021', ar: 'أبريل 2021' },
          desc: {
            en: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
            ar: 'هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها التطبيق. إذا كنت تحتاج إلى عدد أكبر من الفقرات يتيح لك مولد النص العربى زيادة عدد الفقرات كما تريد، النص لن يبدو مقسما ولا يحوي أخطاء لغوية، مولد النص العربى مفيد لمصممي المواقع على وجه الخصوص، حيث يحتاج العميل فى كثير من الأحيان أن يطلع على صورة حقيقية لتصميم الموقع. ومن هنا وجب على المصمم أن يضع نصوصا مؤقتة على التصميم ليظهر للعميل الشكل كاملاً، دور مولد النص العربى أن يوفر على المصمم عناء البحث عن نص بديل لا علاقة له بالموضوع الذى يتحدث عنه التصميم فيظهر بشكل لا يليق.'
          },
          category: 'Vue',
          tools: ['HTML', 'Slim', 'CSS', 'Less', 'JavaScript', 'TypeScript', 'TailwindCSS', 'AJAX', 'Angular', 'NodeJs', 'MongoDB'],
          screenshots: {
            img1: {
              url: 'assets/images/single-portfolio/single-portfolio-5.png',
              caption: { en: 'caption 5', ar: 'تسمية توضيحية 5' }
            },
            img2: {
              url: 'assets/images/single-portfolio/single-portfolio-4.png',
              caption: { en: 'caption 4', ar: 'تسمية توضيحية 4' }
            },
            img3: {
              url: 'assets/images/single-portfolio/single-portfolio-3.png',
              caption: { en: 'caption 3', ar: 'تسمية توضيحية 3' }
            },
            img4: {
              url: 'assets/images/single-portfolio/single-portfolio-2.png',
              caption: { en: 'caption 2', ar: 'تسمية توضيحية 2' }
            },
            img5: {
              url: 'assets/images/single-portfolio/single-portfolio-1.png',
              caption: { en: 'caption 1', ar: 'تسمية توضيحية 1' }
            }
          }
        }, {
          id: 9,
          url: 'single-portfolio.html?id=9',
          imgUrl: 'assets/images/portfolio/portfolio-5.png',
          title: { en: 'Lorem Ipsum Dolor 9', ar: 'هنا عنوان المشروع 9' },
          date: { en: 'April 2021', ar: 'أبريل 2021' },
          desc: {
            en: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
            ar: 'هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها التطبيق. إذا كنت تحتاج إلى عدد أكبر من الفقرات يتيح لك مولد النص العربى زيادة عدد الفقرات كما تريد، النص لن يبدو مقسما ولا يحوي أخطاء لغوية، مولد النص العربى مفيد لمصممي المواقع على وجه الخصوص، حيث يحتاج العميل فى كثير من الأحيان أن يطلع على صورة حقيقية لتصميم الموقع. ومن هنا وجب على المصمم أن يضع نصوصا مؤقتة على التصميم ليظهر للعميل الشكل كاملاً، دور مولد النص العربى أن يوفر على المصمم عناء البحث عن نص بديل لا علاقة له بالموضوع الذى يتحدث عنه التصميم فيظهر بشكل لا يليق.'
          },
          category: 'Angular',
          tools: ['HTML', 'PugJS', 'CSS', 'SCSS', 'JavaScript', 'Gulp', 'Materialize', 'AJAX', 'Vue', 'Firebase'],
          screenshots: {
            img1: {
              url: 'assets/images/single-portfolio/single-portfolio-5.png',
              caption: { en: 'caption 5', ar: 'تسمية توضيحية 5' }
            },
            img2: {
              url: 'assets/images/single-portfolio/single-portfolio-4.png',
              caption: { en: 'caption 4', ar: 'تسمية توضيحية 4' }
            },
            img3: {
              url: 'assets/images/single-portfolio/single-portfolio-3.png',
              caption: { en: 'caption 3', ar: 'تسمية توضيحية 3' }
            },
            img4: {
              url: 'assets/images/single-portfolio/single-portfolio-2.png',
              caption: { en: 'caption 2', ar: 'تسمية توضيحية 2' }
            },
            img5: {
              url: 'assets/images/single-portfolio/single-portfolio-1.png',
              caption: { en: 'caption 1', ar: 'تسمية توضيحية 1' }
            }
          }
        }, {
          id: 10,
          url: 'single-portfolio.html?id=10',
          imgUrl: 'assets/images/portfolio/portfolio-6.png',
          title: { en: 'Lorem Ipsum Dolor 10', ar: 'هنا عنوان المشروع 10' },
          date: { en: 'April 2021', ar: 'أبريل 2021' },
          desc: {
            en: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
            ar: 'هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها التطبيق. إذا كنت تحتاج إلى عدد أكبر من الفقرات يتيح لك مولد النص العربى زيادة عدد الفقرات كما تريد، النص لن يبدو مقسما ولا يحوي أخطاء لغوية، مولد النص العربى مفيد لمصممي المواقع على وجه الخصوص، حيث يحتاج العميل فى كثير من الأحيان أن يطلع على صورة حقيقية لتصميم الموقع. ومن هنا وجب على المصمم أن يضع نصوصا مؤقتة على التصميم ليظهر للعميل الشكل كاملاً، دور مولد النص العربى أن يوفر على المصمم عناء البحث عن نص بديل لا علاقة له بالموضوع الذى يتحدث عنه التصميم فيظهر بشكل لا يليق.'
          },
          category: 'HTML',
          tools: ['HTML', 'Slim', 'CSS', 'Less', 'JavaScript', 'TypeScript', 'Bootstrap', 'AJAX', 'Angular', 'NodeJs', 'MongoDB'],
          screenshots: {
            img1: {
              url: 'assets/images/single-portfolio/single-portfolio-5.png',
              caption: { en: 'caption 5', ar: 'تسمية توضيحية 5' }
            },
            img2: {
              url: 'assets/images/single-portfolio/single-portfolio-4.png',
              caption: { en: 'caption 4', ar: 'تسمية توضيحية 4' }
            },
            img3: {
              url: 'assets/images/single-portfolio/single-portfolio-3.png',
              caption: { en: 'caption 3', ar: 'تسمية توضيحية 3' }
            },
            img4: {
              url: 'assets/images/single-portfolio/single-portfolio-2.png',
              caption: { en: 'caption 2', ar: 'تسمية توضيحية 2' }
            },
            img5: {
              url: 'assets/images/single-portfolio/single-portfolio-1.png',
              caption: { en: 'caption 1', ar: 'تسمية توضيحية 1' }
            }
          }
        }, {
          id: 11,
          url: 'single-portfolio.html?id=11',
          imgUrl: 'assets/images/portfolio/portfolio-7.png',
          title: { en: 'Lorem Ipsum Dolor 11', ar: 'هنا عنوان المشروع 11' },
          date: { en: 'April 2021', ar: 'أبريل 2021' },
          desc: {
            en: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
            ar: 'هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها التطبيق. إذا كنت تحتاج إلى عدد أكبر من الفقرات يتيح لك مولد النص العربى زيادة عدد الفقرات كما تريد، النص لن يبدو مقسما ولا يحوي أخطاء لغوية، مولد النص العربى مفيد لمصممي المواقع على وجه الخصوص، حيث يحتاج العميل فى كثير من الأحيان أن يطلع على صورة حقيقية لتصميم الموقع. ومن هنا وجب على المصمم أن يضع نصوصا مؤقتة على التصميم ليظهر للعميل الشكل كاملاً، دور مولد النص العربى أن يوفر على المصمم عناء البحث عن نص بديل لا علاقة له بالموضوع الذى يتحدث عنه التصميم فيظهر بشكل لا يليق.'
          },
          category: 'Vue',
          tools: ['HTML', 'PugJS', 'CSS', 'SCSS', 'JavaScript', 'Gulp', 'TailwindCSS', 'AJAX', 'Angular', 'Firebase'],
          screenshots: {
            img1: {
              url: 'assets/images/single-portfolio/single-portfolio-5.png',
              caption: { en: 'caption 5', ar: 'تسمية توضيحية 5' }
            },
            img2: {
              url: 'assets/images/single-portfolio/single-portfolio-4.png',
              caption: { en: 'caption 4', ar: 'تسمية توضيحية 4' }
            },
            img3: {
              url: 'assets/images/single-portfolio/single-portfolio-3.png',
              caption: { en: 'caption 3', ar: 'تسمية توضيحية 3' }
            },
            img4: {
              url: 'assets/images/single-portfolio/single-portfolio-2.png',
              caption: { en: 'caption 2', ar: 'تسمية توضيحية 2' }
            },
            img5: {
              url: 'assets/images/single-portfolio/single-portfolio-1.png',
              caption: { en: 'caption 1', ar: 'تسمية توضيحية 1' }
            }
          }
        }, {
          id: 12,
          url: 'single-portfolio.html?id=12',
          imgUrl: 'assets/images/portfolio/portfolio-1.png',
          title: { en: 'Lorem Ipsum Dolor 12', ar: 'هنا عنوان المشروع 12' },
          date: { en: 'April 2021', ar: 'أبريل 2021' },
          desc: {
            en: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
            ar: 'هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها التطبيق. إذا كنت تحتاج إلى عدد أكبر من الفقرات يتيح لك مولد النص العربى زيادة عدد الفقرات كما تريد، النص لن يبدو مقسما ولا يحوي أخطاء لغوية، مولد النص العربى مفيد لمصممي المواقع على وجه الخصوص، حيث يحتاج العميل فى كثير من الأحيان أن يطلع على صورة حقيقية لتصميم الموقع. ومن هنا وجب على المصمم أن يضع نصوصا مؤقتة على التصميم ليظهر للعميل الشكل كاملاً، دور مولد النص العربى أن يوفر على المصمم عناء البحث عن نص بديل لا علاقة له بالموضوع الذى يتحدث عنه التصميم فيظهر بشكل لا يليق.'
          },
          category: 'Angular',
          tools: ['HTML', 'Slim', 'CSS', 'Less', 'JavaScript', 'TypeScript', 'Materialize', 'AJAX', 'Vue', 'NodeJs', 'MongoDB'],
          screenshots: {
            img1: {
              url: 'assets/images/single-portfolio/single-portfolio-5.png',
              caption: { en: 'caption 5', ar: 'تسمية توضيحية 5' }
            },
            img2: {
              url: 'assets/images/single-portfolio/single-portfolio-4.png',
              caption: { en: 'caption 4', ar: 'تسمية توضيحية 4' }
            },
            img3: {
              url: 'assets/images/single-portfolio/single-portfolio-3.png',
              caption: { en: 'caption 3', ar: 'تسمية توضيحية 3' }
            },
            img4: {
              url: 'assets/images/single-portfolio/single-portfolio-2.png',
              caption: { en: 'caption 2', ar: 'تسمية توضيحية 2' }
            },
            img5: {
              url: 'assets/images/single-portfolio/single-portfolio-1.png',
              caption: { en: 'caption 1', ar: 'تسمية توضيحية 1' }
            }
          }
        }, {
          id: 13,
          url: 'single-portfolio.html?id=13',
          imgUrl: 'assets/images/portfolio/portfolio-2.png',
          title: { en: 'Lorem Ipsum Dolor 13', ar: 'هنا عنوان المشروع 13' },
          date: { en: 'April 2021', ar: 'أبريل 2021' },
          desc: {
            en: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
            ar: 'هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها التطبيق. إذا كنت تحتاج إلى عدد أكبر من الفقرات يتيح لك مولد النص العربى زيادة عدد الفقرات كما تريد، النص لن يبدو مقسما ولا يحوي أخطاء لغوية، مولد النص العربى مفيد لمصممي المواقع على وجه الخصوص، حيث يحتاج العميل فى كثير من الأحيان أن يطلع على صورة حقيقية لتصميم الموقع. ومن هنا وجب على المصمم أن يضع نصوصا مؤقتة على التصميم ليظهر للعميل الشكل كاملاً، دور مولد النص العربى أن يوفر على المصمم عناء البحث عن نص بديل لا علاقة له بالموضوع الذى يتحدث عنه التصميم فيظهر بشكل لا يليق.'
          },
          category: 'HTML',
          tools: ['HTML', 'PugJS', 'CSS', 'SCSS', 'JavaScript', 'Gulp', 'TailwindCSS', 'AJAX', 'Angular', 'Firebase'],
          screenshots: {
            img1: {
              url: 'assets/images/single-portfolio/single-portfolio-5.png',
              caption: { en: 'caption 5', ar: 'تسمية توضيحية 5' }
            },
            img2: {
              url: 'assets/images/single-portfolio/single-portfolio-4.png',
              caption: { en: 'caption 4', ar: 'تسمية توضيحية 4' }
            },
            img3: {
              url: 'assets/images/single-portfolio/single-portfolio-3.png',
              caption: { en: 'caption 3', ar: 'تسمية توضيحية 3' }
            },
            img4: {
              url: 'assets/images/single-portfolio/single-portfolio-2.png',
              caption: { en: 'caption 2', ar: 'تسمية توضيحية 2' }
            },
            img5: {
              url: 'assets/images/single-portfolio/single-portfolio-1.png',
              caption: { en: 'caption 1', ar: 'تسمية توضيحية 1' }
            }
          }
        }, {
          id: 14,
          url: 'single-portfolio.html?id=14',
          imgUrl: 'assets/images/portfolio/portfolio-3.png',
          title: { en: 'Lorem Ipsum Dolor 14', ar: 'هنا عنوان المشروع 14' },
          date: { en: 'April 2021', ar: 'أبريل 2021' },
          desc: {
            en: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
            ar: 'هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها التطبيق. إذا كنت تحتاج إلى عدد أكبر من الفقرات يتيح لك مولد النص العربى زيادة عدد الفقرات كما تريد، النص لن يبدو مقسما ولا يحوي أخطاء لغوية، مولد النص العربى مفيد لمصممي المواقع على وجه الخصوص، حيث يحتاج العميل فى كثير من الأحيان أن يطلع على صورة حقيقية لتصميم الموقع. ومن هنا وجب على المصمم أن يضع نصوصا مؤقتة على التصميم ليظهر للعميل الشكل كاملاً، دور مولد النص العربى أن يوفر على المصمم عناء البحث عن نص بديل لا علاقة له بالموضوع الذى يتحدث عنه التصميم فيظهر بشكل لا يليق.'
          },
          category: 'Angular',
          tools: ['HTML', 'Slim', 'CSS', 'Less', 'JavaScript', 'TypeScript', 'Bootstrap', 'AJAX', 'Vue', 'NodeJs', 'MongoDB'],
          screenshots: {
            img1: {
              url: 'assets/images/single-portfolio/single-portfolio-5.png',
              caption: { en: 'caption 5', ar: 'تسمية توضيحية 5' }
            },
            img2: {
              url: 'assets/images/single-portfolio/single-portfolio-4.png',
              caption: { en: 'caption 4', ar: 'تسمية توضيحية 4' }
            },
            img3: {
              url: 'assets/images/single-portfolio/single-portfolio-3.png',
              caption: { en: 'caption 3', ar: 'تسمية توضيحية 3' }
            },
            img4: {
              url: 'assets/images/single-portfolio/single-portfolio-2.png',
              caption: { en: 'caption 2', ar: 'تسمية توضيحية 2' }
            },
            img5: {
              url: 'assets/images/single-portfolio/single-portfolio-1.png',
              caption: { en: 'caption 1', ar: 'تسمية توضيحية 1' }
            }
          }
        }, {
          id: 15,
          url: 'single-portfolio.html?id=15',
          imgUrl: 'assets/images/portfolio/portfolio-4.png',
          title: { en: 'Click-play', ar: 'هنا عنوان المشروع 15' },
          date: { en: 'April 2017', ar: 'أبريل 2021' },
          desc: {
            en: 'Click-play is a marketplace where user can sell their service like freelancer, upwork etc',
            ar: 'هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها التطبيق. إذا كنت تحتاج إلى عدد أكبر من الفقرات يتيح لك مولد النص العربى زيادة عدد الفقرات كما تريد، النص لن يبدو مقسما ولا يحوي أخطاء لغوية، مولد النص العربى مفيد لمصممي المواقع على وجه الخصوص، حيث يحتاج العميل فى كثير من الأحيان أن يطلع على صورة حقيقية لتصميم الموقع. ومن هنا وجب على المصمم أن يضع نصوصا مؤقتة على التصميم ليظهر للعميل الشكل كاملاً، دور مولد النص العربى أن يوفر على المصمم عناء البحث عن نص بديل لا علاقة له بالموضوع الذى يتحدث عنه التصميم فيظهر بشكل لا يليق.'
          },
          category: 'React',
          tools: ['HTML', 'CSS', 'SCSS', 'JavaScript', 'Gulp', 'Materialize', 'AJAX', 'React', 'Firebase'],
          screenshots: {
            img1: {
              url: 'assets/images/single-portfolio/single-portfolio-5.png',
              caption: { en: 'caption 5', ar: 'تسمية توضيحية 5' }
            },
            img2: {
              url: 'assets/images/single-portfolio/single-portfolio-4.png',
              caption: { en: 'caption 4', ar: 'تسمية توضيحية 4' }
            },
            img3: {
              url: 'assets/images/single-portfolio/single-portfolio-3.png',
              caption: { en: 'caption 3', ar: 'تسمية توضيحية 3' }
            },
            img4: {
              url: 'assets/images/single-portfolio/single-portfolio-2.png',
              caption: { en: 'caption 2', ar: 'تسمية توضيحية 2' }
            },
            img5: {
              url: 'assets/images/single-portfolio/single-portfolio-1.png',
              caption: { en: 'caption 1', ar: 'تسمية توضيحية 1' }
            }
          }
        }, {
          id: 16,
          url: 'single-portfolio.html?id=16',
          imgUrl: 'assets/images/portfolio/portfolio-5.png',
          title: { en: 'Next Gen classified', ar: 'هنا عنوان المشروع 16' },
          date: { en: 'April 2015', ar: 'أبريل 2021' },
          desc: {
            en: 'Next Gen classified is like "buyers and sellers marketplace like eBay"',
            ar: 'هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها التطبيق. إذا كنت تحتاج إلى عدد أكبر من الفقرات يتيح لك مولد النص العربى زيادة عدد الفقرات كما تريد، النص لن يبدو مقسما ولا يحوي أخطاء لغوية، مولد النص العربى مفيد لمصممي المواقع على وجه الخصوص، حيث يحتاج العميل فى كثير من الأحيان أن يطلع على صورة حقيقية لتصميم الموقع. ومن هنا وجب على المصمم أن يضع نصوصا مؤقتة على التصميم ليظهر للعميل الشكل كاملاً، دور مولد النص العربى أن يوفر على المصمم عناء البحث عن نص بديل لا علاقة له بالموضوع الذى يتحدث عنه التصميم فيظهر بشكل لا يليق.'
          },
          category: 'Angular',
          tools: ['HTML', 'Slim', 'CSS', 'Less', 'JavaScript', 'TypeScript', 'Bootstrap', 'AJAX', 'NodeJs', 'MongoDB'],
          screenshots: {
            img1: {
              url: 'assets/images/single-portfolio/single-portfolio-5.png',
              caption: { en: 'caption 5', ar: 'تسمية توضيحية 5' }
            },
            img2: {
              url: 'assets/images/single-portfolio/single-portfolio-4.png',
              caption: { en: 'caption 4', ar: 'تسمية توضيحية 4' }
            },
            img3: {
              url: 'assets/images/single-portfolio/single-portfolio-3.png',
              caption: { en: 'caption 3', ar: 'تسمية توضيحية 3' }
            },
            img4: {
              url: 'assets/images/single-portfolio/single-portfolio-2.png',
              caption: { en: 'caption 2', ar: 'تسمية توضيحية 2' }
            },
            img5: {
              url: 'assets/images/single-portfolio/single-portfolio-1.png',
              caption: { en: 'caption 1', ar: 'تسمية توضيحية 1' }
            }
          }
        }, {
          id: 17,
          url: 'single-portfolio.html?id=17',
          imgUrl: 'assets/images/portfolio/portfolio-6.png',
          title: { en: 'EasySign Solutions', ar: 'هنا عنوان المشروع 17' },
          date: { en: 'April 2014', ar: 'أبريل 2021' },
          desc: {
            en: 'EasySign Solutions is an Indian logistics company that provides courier delivery services.',
            ar: 'هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها التطبيق. إذا كنت تحتاج إلى عدد أكبر من الفقرات يتيح لك مولد النص العربى زيادة عدد الفقرات كما تريد، النص لن يبدو مقسما ولا يحوي أخطاء لغوية، مولد النص العربى مفيد لمصممي المواقع على وجه الخصوص، حيث يحتاج العميل فى كثير من الأحيان أن يطلع على صورة حقيقية لتصميم الموقع. ومن هنا وجب على المصمم أن يضع نصوصا مؤقتة على التصميم ليظهر للعميل الشكل كاملاً، دور مولد النص العربى أن يوفر على المصمم عناء البحث عن نص بديل لا علاقة له بالموضوع الذى يتحدث عنه التصميم فيظهر بشكل لا يليق.'
          },
          category: 'Angular',
          tools: ['HTML', 'CSS', 'SCSS', 'JavaScript', 'Gulp', 'TailwindCSS', 'AJAX', 'Angular', 'Firebase'],
          screenshots: {
            img1: {
              url: 'assets/images/single-portfolio/single-portfolio-5.png',
              caption: { en: 'caption 5', ar: 'تسمية توضيحية 5' }
            },
            img2: {
              url: 'assets/images/single-portfolio/single-portfolio-4.png',
              caption: { en: 'caption 4', ar: 'تسمية توضيحية 4' }
            },
            img3: {
              url: 'assets/images/single-portfolio/single-portfolio-3.png',
              caption: { en: 'caption 3', ar: 'تسمية توضيحية 3' }
            },
            img4: {
              url: 'assets/images/single-portfolio/single-portfolio-2.png',
              caption: { en: 'caption 2', ar: 'تسمية توضيحية 2' }
            },
            img5: {
              url: 'assets/images/single-portfolio/single-portfolio-1.png',
              caption: { en: 'caption 1', ar: 'تسمية توضيحية 1' }
            }
          }
        }, {
          id: 18,
          url: 'single-portfolio.html?id=18',
          imgUrl: 'assets/images/portfolio/portfolio-7.png',
          title: { en: 'Slambook', ar: 'هنا عنوان المشروع 18' },
          date: { en: 'Nov 2015', ar: 'أبريل 2021' },
          desc: {
            en: 'Slambook app provides user freindly UX for capturing old memories into digital world',
            ar: 'هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها التطبيق. إذا كنت تحتاج إلى عدد أكبر من الفقرات يتيح لك مولد النص العربى زيادة عدد الفقرات كما تريد، النص لن يبدو مقسما ولا يحوي أخطاء لغوية، مولد النص العربى مفيد لمصممي المواقع على وجه الخصوص، حيث يحتاج العميل فى كثير من الأحيان أن يطلع على صورة حقيقية لتصميم الموقع. ومن هنا وجب على المصمم أن يضع نصوصا مؤقتة على التصميم ليظهر للعميل الشكل كاملاً، دور مولد النص العربى أن يوفر على المصمم عناء البحث عن نص بديل لا علاقة له بالموضوع الذى يتحدث عنه التصميم فيظهر بشكل لا يليق.'
          },
          category: 'React',
          tools: ['HTML', 'Slim', 'CSS', 'Less', 'JavaScript', 'TypeScript', 'Materialize', 'AJAX', 'React', 'NodeJs', 'MongoDB'],
          screenshots: {
            img1: {
              url: 'assets/images/single-portfolio/single-portfolio-5.png',
              caption: { en: 'caption 5', ar: 'تسمية توضيحية 5' }
            },
            img2: {
              url: 'assets/images/single-portfolio/single-portfolio-4.png',
              caption: { en: 'caption 4', ar: 'تسمية توضيحية 4' }
            },
            img3: {
              url: 'assets/images/single-portfolio/single-portfolio-3.png',
              caption: { en: 'caption 3', ar: 'تسمية توضيحية 3' }
            },
            img4: {
              url: 'assets/images/single-portfolio/single-portfolio-2.png',
              caption: { en: 'caption 2', ar: 'تسمية توضيحية 2' }
            },
            img5: {
              url: 'assets/images/single-portfolio/single-portfolio-1.png',
              caption: { en: 'caption 1', ar: 'تسمية توضيحية 1' }
            }
          }
        }
      ].reverse(),

      // current page of portfolio items
      portfolioItemsPage: 0,

      filters: ['All', 'HTML', 'Angular', 'React'],
      currentFilter: 'All',

      // viewed portfolio items
      portfolioItems: [],

      // list of testimonials items to loop through it
      testimonialsItems: [
        {
          imgUrl: 'https://media-exp1.licdn.com/dms/image/C5103AQFnKzDfgo66DQ/profile-displayphoto-shrink_100_100/0/1576910367176?e=1642636800&v=beta&t=wVQ5GiN_Dj7jQurhck1pJ5nUS7RvPt3CY9h4OTyFczc',
          quoteContent: {
            en: 'Sourabh is a very enthusiastic person as well as a technical guy at his best. He is very confident, self motivated and knowledgeable in his area of work. He is also fun to work with and a good team player. I wish him all the best in his endeavors.',
            ar: 'محمد يقدم خدمات مذهلة في تطوير الويب، ولديه فريق محترف يجعل التعامل معهم مطمئن للغاية. أوصي بفريقهم للجميع.'
          },
          quoteAuthor: { en: 'Rakesh Jha', ar: 'جابر العواني' },
          jobTitle: { en: 'Minimalist | Human | Software & Technology', ar: 'مصور فوتوغرافي' }
        }, {
          imgUrl: 'assets/images/testimonials/sumit.jpeg',
          quoteContent: {
            en: 'Sourabh is a great project partner, I really enjoyed as worked with him.. This is very timely as I am about to write my first recommendation for a colleague. Sourabh is extremely enthusiastic about his work which is infectious. I certainly would recommend him for any helps in projects or discussions.',
            ar: 'فريق ممتاز للعمل معه. إيجابي دائمًا للعثور على الحل الأنسب. هم إحدى شركات تطوير الويب المحترفة التي تقدم خدمات رائعة.'
          },
          quoteAuthor: { en: 'Sumit Munot', ar: 'حسون القلال' },
          jobTitle: { en: 'Delivery Manager at NeoSOFT Technologies', ar: 'مدير المشاريع' }
        }, {
          imgUrl: 'https://media-exp1.licdn.com/dms/image/C4D03AQHnParEJsdyFw/profile-displayphoto-shrink_100_100/0/1516962773696?e=1642636800&v=beta&t=804R_ieJ7PR-73wgv3KlqW5P_Cwtu_iVz5HLtdeTRAw',
          quoteContent: {
            en: 'Sourabh is very good team player and hard worker. I am very be comfortable while working with him.',
            ar: 'محمد مطور محترف للغاية يقدم دائمًا نتائج عالية الجودة ، وهو دائمًا موجود للمساعدة. نتطلع إلى العمل معه في مشاريع أخرى.'
          },
          quoteAuthor: { en: 'Narsimlu Katam', ar: 'مصطفى الخليفي' },
          jobTitle: { en: 'CEO, Designer', ar: 'أخصائي SEO' }
        }, {
          imgUrl: 'https://media-exp1.licdn.com/dms/image/C4D03AQFrXZiO89Pk9g/profile-displayphoto-shrink_100_100/0/1633181446022?e=1642636800&v=beta&t=x_CiffQYbye-sSt5Qc0IY24zFCYYK-_dfbfnYx405xI',
          quoteContent: {
            en: 'Nafie worked on a handful of projects for us and has always exceeded our expectations. Nafie team is dedicated, talented and a delight to work with.',
            ar: 'عمل محمد في عدد كبير من المشاريع لأجلنا وكان دائمًا يفوق توقعاتنا. مطور متخصص وموهوب ونسعد دائمًا بالعمل معه.'
          },
          quoteAuthor: { en: 'Amir Stoltenberg', ar: 'عباس العنابي' },
          jobTitle: { en: 'Sales Manager', ar: 'مدير مبيعات' }
        }, {
          imgUrl: 'https://media-exp1.licdn.com/dms/image/C4E03AQERA-lDpM_TmQ/profile-displayphoto-shrink_100_100/0/1629722845829?e=1642636800&v=beta&t=qNBDbdAcdgQ219dFTF8YYjaeRXyjlysRblS-sIrvebg',
          quoteContent: {
            en: 'I know I can count on your service if I need my project done fast and with the best possible result. I am a regular customer and hope to continue our work!',
            ar: 'يمكنني الاعتماد على خدمات محمد دائمًا وخاصة إذا كنت بحاجة إلى إنجاز مشروعي في أقل وقت وبأفضل نتيجة ممكنة. أنا عميل منتظم لديه وآمل أن نواصل عملنا معا دائمًا.'
          },
          quoteAuthor: { en: 'Kenton Marquardt', ar: 'سمير النجار' },
          jobTitle: { en: 'Art Director', ar: 'آرت دايركتور' }
        }, {
          imgUrl: 'https://media-exp1.licdn.com/dms/image/C4E03AQGi9jvcR2IDrQ/profile-displayphoto-shrink_100_100/0/1551105299877?e=1642636800&v=beta&t=2Nfpoo7N-KKiYws9SQ2zJfeQv2sgg6MKUxQ7tGtOEBE',
          quoteContent: {
            en: 'Muhammad was a real pleasure to work with and we look forward to working with him again. He’s definitely the kind of developer you can trust with a project from start to finish.',
            ar: 'أنا سعيد حقًا بالعمل مع محمد وأتطلع إلى العمل معه مرة أخرى قريبا. هو بالتأكيد من المطورين الذي يمكنك الوثوق بهم للعمل على مشروعك من البداية إلى النهاية.'
          },
          quoteAuthor: { en: 'Reyna Hammes', ar: 'أمير داوود' },
          jobTitle: { en: 'Motion Graphic Animator', ar: 'مصمم موشن جرافيك' }
        }, {
          imgUrl: 'https://media-exp1.licdn.com/dms/image/C4D03AQHqHfnJrc4h-A/profile-displayphoto-shrink_100_100/0/1516306158607?e=1642636800&v=beta&t=0VZAMuebLtt8adS4yqaNGGglLIOaCfnLRYKQkyUr4eQ',
          quoteContent: {
            en: 'Nafie worked on a handful of projects for us and has always exceeded our expectations. Nafie team is dedicated, talented and a delight to work with.',
            ar: 'عمل محمد في عدد كبير من المشاريع لأجلنا وكان دائمًا يفوق توقعاتنا. مطور متخصص وموهوب ونسعد دائمًا بالعمل معه.'
          },
          quoteAuthor: { en: 'Rosa Ferry', ar: 'نافع حاتم' },
          jobTitle: { en: 'Sales Manager', ar: 'مدير مبيعات' }
        },{
          imgUrl: 'https://media-exp1.licdn.com/dms/image/C5603AQHclxqmfjVZRw/profile-displayphoto-shrink_100_100/0/1595912047429?e=1642636800&v=beta&t=MnMZa4TBcK7K05IvKCci5d4H--0JdXQU7aXoCk2kT0o',
          quoteContent: {
            en: 'Muhammad was a real pleasure to work with and we look forward to working with him again. He’s definitely the kind of developer you can trust with a project from start to finish.',
            ar: 'أنا سعيد حقًا بالعمل مع محمد وأتطلع إلى العمل معه مرة أخرى قريبا. هو بالتأكيد من المطورين الذي يمكنك الوثوق بهم للعمل على مشروعك من البداية إلى النهاية.'
          },
          quoteAuthor: { en: 'Jovan Parisian', ar: 'منصور السقاط' },
          jobTitle: { en: 'Motion Graphic Animator', ar: 'مصمم موشن جرافيك' }
        }, {
          imgUrl: 'https://media-exp1.licdn.com/dms/image/C4E03AQExKkDK6XyTRg/profile-displayphoto-shrink_100_100/0/1579025361462?e=1642636800&v=beta&t=GVlxn2VGeuuJO61rBgR-aW93thVUGATe-x5hYjZO71s',
          quoteContent: {
            en: 'I know I can count on your service if I need my project done fast and with the best possible result. I am a regular customer and hope to continue our work!',
            ar: 'يمكنني الاعتماد على خدمات محمد دائمًا وخاصة إذا كنت بحاجة إلى إنجاز مشروعي في أقل وقت وبأفضل نتيجة ممكنة. أنا عميل منتظم لديه وآمل أن نواصل عملنا معا دائمًا.'
          },
          quoteAuthor: { en: 'Pasquale Deckow', ar: 'عطا بن عاشور' },
          jobTitle: { en: 'Art Director', ar: 'آرت دايركتور' }
        }, 
        {
          imgUrl: 'assets/images/testimonials/testimonials-11.jpg',
          quoteContent: {
            en: 'Excellent Team to work with. Always positive to find the most appropriate solution. Nafie is one of the professional web development agency that provides awesome services.',
            ar: 'فريق ممتاز للعمل معه. إيجابي دائمًا للعثور على الحل الأنسب. هم إحدى شركات تطوير الويب المحترفة التي تقدم خدمات رائعة.'
          },
          quoteAuthor: { en: 'Casper Paucek', ar: 'حسان ادريس' },
          jobTitle: { en: 'Project Manager', ar: 'مدير المشاريع' }
        }, {
          imgUrl: 'assets/images/testimonials/testimonials-12.jpg',
          quoteContent: {
            en: 'Nafie simply provides amazing web development service. Their team is extremely professional and the easiest to meet I have ever worked with. I would recommend Nafie to anyone.',
            ar: 'محمد يقدم خدمات مذهلة في تطوير الويب، ولديه فريق محترف يجعل التعامل معهم مطمئن للغاية. أوصي بفريقهم للجميع.'
          },
          quoteAuthor: { en: 'Archibald Fadel', ar: 'مجد الكافي' },
          jobTitle: { en: 'Photographer', ar: 'مصور فوتوغرافي' }
        }, {
          imgUrl: 'assets/images/testimonials/testimonials-13.jpg',
          quoteContent: {
            en: 'Nafie simply provides amazing web development service. Their team is extremely professional and the easiest to meet I have ever worked with. I would recommend Nafie to anyone.',
            ar: 'محمد يقدم خدمات مذهلة في تطوير الويب، ولديه فريق محترف يجعل التعامل معهم مطمئن للغاية. أوصي بفريقهم للجميع.'
          },
          quoteAuthor: { en: 'Tabitha Denesik', ar: 'آسر بنسلامة' },
          jobTitle: { en: 'Photographer', ar: 'مصور فوتوغرافي' }
        }, {
          imgUrl: 'assets/images/testimonials/testimonials-14.jpg',
          quoteContent: {
            en: 'Excellent Team to work with. Always positive to find the most appropriate solution. Nafie is one of the professional web development agency that provides awesome services.',
            ar: 'فريق ممتاز للعمل معه. إيجابي دائمًا للعثور على الحل الأنسب. هم إحدى شركات تطوير الويب المحترفة التي تقدم خدمات رائعة.'
          },
          quoteAuthor: { en: 'Javon Bogan', ar: 'صهيب الشريف' },
          jobTitle: { en: 'Project Manager', ar: 'مدير المشاريع' }
        }, {
          imgUrl: 'assets/images/testimonials/testimonials-15.jpg',
          quoteContent: {
            en: 'Nafie team is very professional, always delivers high quality results, and is always there to help. Look forward to working with Nafie in other projects.',
            ar: 'محمد مطور محترف للغاية يقدم دائمًا نتائج عالية الجودة ، وهو دائمًا موجود للمساعدة. نتطلع إلى العمل معه في مشاريع أخرى.'
          },
          quoteAuthor: { en: 'Duncan Kemmer', ar: 'سيد كرم' },
          jobTitle: { en: 'CEO, Designer', ar: 'أخصائي SEO' }
        }, {
          imgUrl: 'assets/images/testimonials/testimonials-16.jpg',
          quoteContent: {
            en: 'Nafie worked on a handful of projects for us and has always exceeded our expectations. Nafie team is dedicated, talented and a delight to work with.',
            ar: 'عمل محمد في عدد كبير من المشاريع لأجلنا وكان دائمًا يفوق توقعاتنا. مطور متخصص وموهوب ونسعد دائمًا بالعمل معه.'
          },
          quoteAuthor: { en: 'Coy Johns', ar: 'هيثم الشريف' },
          jobTitle: { en: 'Sales Manager', ar: 'مدير مبيعات' }
        }, {
          imgUrl: 'assets/images/testimonials/testimonials-17.jpg',
          quoteContent: {
            en: 'I know I can count on your service if I need my project done fast and with the best possible result. I am a regular customer and hope to continue our work!',
            ar: 'يمكنني الاعتماد على خدمات محمد دائمًا وخاصة إذا كنت بحاجة إلى إنجاز مشروعي في أقل وقت وبأفضل نتيجة ممكنة. أنا عميل منتظم لديه وآمل أن نواصل عملنا معا دائمًا.'
          },
          quoteAuthor: { en: 'Murphy Roberts', ar: 'إسلام مصطفى' },
          jobTitle: { en: 'Art Director', ar: 'آرت دايركتور' }
        }, {
          imgUrl: 'assets/images/testimonials/testimonials-18.jpg',
          quoteContent: {
            en: 'Muhammad was a real pleasure to work with and we look forward to working with him again. He’s definitely the kind of developer you can trust with a project from start to finish.',
            ar: 'أنا سعيد حقًا بالعمل مع محمد وأتطلع إلى العمل معه مرة أخرى قريبا. هو بالتأكيد من المطورين الذي يمكنك الوثوق بهم للعمل على مشروعك من البداية إلى النهاية.'
          },
          quoteAuthor: { en: 'Dimitri Lockman', ar: 'وسيم السقا' },
          jobTitle: { en: 'Motion Graphic Animator', ar: 'مصمم موشن جرافيك' }
        },
        {
          imgUrl: 'assets/images/testimonials/testimonials-5.jpg',
          quoteContent: {
            en: 'I know I can count on your service if I need my project done fast and with the best possible result. I am a regular customer and hope to continue our work!',
            ar: 'يمكنني الاعتماد على خدمات محمد دائمًا وخاصة إذا كنت بحاجة إلى إنجاز مشروعي في أقل وقت وبأفضل نتيجة ممكنة. أنا عميل منتظم لديه وآمل أن نواصل عملنا معا دائمًا.'
          },
          quoteAuthor: { en: 'Kenton Marquardt', ar: 'سمير النجار' },
          jobTitle: { en: 'Art Director', ar: 'آرت دايركتور' }
        }, {
          imgUrl: 'assets/images/testimonials/testimonials-6.jpg',
          quoteContent: {
            en: 'Muhammad was a real pleasure to work with and we look forward to working with him again. He’s definitely the kind of developer you can trust with a project from start to finish.',
            ar: 'أنا سعيد حقًا بالعمل مع محمد وأتطلع إلى العمل معه مرة أخرى قريبا. هو بالتأكيد من المطورين الذي يمكنك الوثوق بهم للعمل على مشروعك من البداية إلى النهاية.'
          },
          quoteAuthor: { en: 'Reyna Hammes', ar: 'أمير داوود' },
          jobTitle: { en: 'Motion Graphic Animator', ar: 'مصمم موشن جرافيك' }
        }, {
          imgUrl: 'assets/images/testimonials/testimonials-7.jpg',
          quoteContent: {
            en: 'Muhammad was a real pleasure to work with and we look forward to working with him again. He’s definitely the kind of developer you can trust with a project from start to finish.',
            ar: 'أنا سعيد حقًا بالعمل مع محمد وأتطلع إلى العمل معه مرة أخرى قريبا. هو بالتأكيد من المطورين الذي يمكنك الوثوق بهم للعمل على مشروعك من البداية إلى النهاية.'
          },
          quoteAuthor: { en: 'Jovan Parisian', ar: 'منصور السقاط' },
          jobTitle: { en: 'Motion Graphic Animator', ar: 'مصمم موشن جرافيك' }
        }, {
          imgUrl: 'assets/images/testimonials/testimonials-8.jpg',
          quoteContent: {
            en: 'I know I can count on your service if I need my project done fast and with the best possible result. I am a regular customer and hope to continue our work!',
            ar: 'يمكنني الاعتماد على خدمات محمد دائمًا وخاصة إذا كنت بحاجة إلى إنجاز مشروعي في أقل وقت وبأفضل نتيجة ممكنة. أنا عميل منتظم لديه وآمل أن نواصل عملنا معا دائمًا.'
          },
          quoteAuthor: { en: 'Pasquale Deckow', ar: 'عطا بن عاشور' },
          jobTitle: { en: 'Art Director', ar: 'آرت دايركتور' }
        }, {
          imgUrl: 'assets/images/testimonials/testimonials-9.jpg',
          quoteContent: {
            en: 'Nafie worked on a handful of projects for us and has always exceeded our expectations. Nafie team is dedicated, talented and a delight to work with.',
            ar: 'عمل محمد في عدد كبير من المشاريع لأجلنا وكان دائمًا يفوق توقعاتنا. مطور متخصص وموهوب ونسعد دائمًا بالعمل معه.'
          },
          quoteAuthor: { en: 'Rosa Ferry', ar: 'نافع حاتم' },
          jobTitle: { en: 'Sales Manager', ar: 'مدير مبيعات' }
        }, {
          imgUrl: 'assets/images/testimonials/testimonials-10.jpg',
          quoteContent: {
            en: 'Nafie team is very professional, always delivers high quality results, and is always there to help. Look forward to working with Nafie in other projects.',
            ar: 'محمد مطور محترف للغاية يقدم دائمًا نتائج عالية الجودة ، وهو دائمًا موجود للمساعدة. نتطلع إلى العمل معه في مشاريع أخرى.'
          },
          quoteAuthor: { en: 'Keshaun Robel', ar: 'صدقي الطويل' },
          jobTitle: { en: 'CEO, Designer', ar: 'أخصائي SEO' }
        },
      ]
    }
  },
  created() {
    // get a theme to use
    this.getAppTheme();

    // get portfolio items
    this.getPortfolioItems();
  },
  mounted() {
    if (window.innerWidth >= 992) {
      // initialize circle cursor
      this.initCircleCursor();

      // nav menu tab trap
      this.navMenuTabTrap();

      // apply pan effect hero image
      this.heroImgPanEffect();

      // initialize VanillaTilt library in portfolio section
      this.initializeTilt();
    }

    // hide the preloader screen after loading
    window.addEventListener('load', () => this.isPreloading = false);

    // scrolling options
    this.scrollingOptions();
    document.addEventListener('scroll', () => this.scrollingOptions());

    // initialize popper.js plugin
    document.querySelectorAll('.has-ultimate-tooltip').forEach(el => {
      Popper.createPopper(el, el.querySelector('.ultimate-tooltip'), {
        placement: 'top',
        modifiers: [{ name: 'offset', options: { offset: [0, 30] }}]
      });
    });
  },
  methods: {
    // initialize circle cursor
    initCircleCursor() {
      const app = this.$refs.appRef;
      const outer = this.$refs.circleCursorOuter;
      const inner = this.$refs.circleCursorInner;

      app.addEventListener('mousemove', e => {
        // make the circles follow the cursor
        outer.setAttribute('style', `visibility: visible; top: ${e.clientY}px; left: ${e.clientX}px;`);
        inner.setAttribute('style', `visibility: visible; top: ${e.clientY}px; left: ${e.clientX}px;`);

        // add link hover style
        (e.target.closest('a') || e.target.closest('button') || e.target.closest('.link-hover')) ? inner.classList.add('cursor-link-hover') : inner.classList.remove('cursor-link-hover');
      });

      app.addEventListener('click', () => {
        // add pulse effect on click
        inner.classList.add('cursor-click-effect');
        setTimeout(() => inner.classList.remove('cursor-click-effect'), 200);
      });
    },

    // get a theme to use
    getAppTheme() {
      // get the saved theme from the localStorage
      const storageSavedTheme = localStorage.getItem('nafieSavedTheme');
    
      // Check to see if there a saved theme
      if (storageSavedTheme) {
        this.savedTheme = storageSavedTheme;
    
      } else {
        // So, try to get the browser default theme or make your own default
    
        // Check to see if Media-Queries are supported
        if (window.matchMedia) {
    
          // Check if the dark-mode Media-Query matches
          if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
            this.savedTheme = 'dark_theme';
          } else { this.savedTheme = 'light_theme'; }
    
        } else {
          // Default (when Media-Queries are not supported)
          this.savedTheme = appTheme;
        }
      }
    
      // save the new theme in the localStorage
      localStorage.setItem('nafieSavedTheme', this.savedTheme);
    },

    // detect the theme changes
    changeAppTheme() {
      (this.savedTheme === 'light_theme') ? this.savedTheme = 'dark_theme' : this.savedTheme = 'light_theme';

      // save the new theme in the localStorage
      localStorage.setItem('nafieSavedTheme', this.savedTheme);
    },

    // toggle nav menu
    toggleNavMenu() {
      this.isNavMenuOpen = !this.isNavMenuOpen;
      this.isNavMenuOpen ? this.openNavMenu() : this.closeNavMenu();
    },

    // open nav menu
    openNavMenu() {
      const bodyEl = document.getElementsByTagName('body')[0];

      this.isNavMenuOpen = true;

      bodyEl.setAttribute('style', 'overflow-y: hidden;');

      // set focus on nav menu
      this.$refs.headerNav.querySelector('.desktop-menu-content').focus();
    },

    // close nav menu
    closeNavMenu() {
      const bodyEl = document.getElementsByTagName('body')[0];

      this.isNavMenuOpen = false;

      bodyEl.removeAttribute('style');

      // set focus on nav menu toggle button
      this.$refs.navMenuToggleBtn.focus();
    },

    // nav menu tab trap
    navMenuTabTrap() {
      const nav = this.$refs.headerNav;
      const focusableElementsString = 'a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), [tabindex="0"]';
      let firstTabStop;
      let lastTabStop;
      let isFirstTabStop;
      let isLastTabStop;

      document.addEventListener('keyup', e => {
        if (nav.classList.contains('menu-open')) {
          // get first & last focusable elements in the side menu for the tab trap
          const visibleFocusableEls = [...nav.querySelectorAll(focusableElementsString)]
            .filter(el => window.getComputedStyle(el).getPropertyValue('visibility') !== 'hidden');
          firstTabStop = visibleFocusableEls[0];
          lastTabStop = visibleFocusableEls[visibleFocusableEls.length -1];

          if (e.code === 'Tab') {
            if (e.shiftKey) /* shift + tab */ {
              // if this is the first item, move to the last item
              isFirstTabStop && lastTabStop.focus();
            } else /* tab */ {
              // if this is the last item, go back to the first item
              isLastTabStop && firstTabStop.focus();
            }

            // close nav menu on Escape button press
          } else if (e.code === 'Escape') { this.toggleNavMenu(); }

          // get current active element
          const activeEl = document.activeElement;

          // check if last item or not
          isLastTabStop = (activeEl === lastTabStop) ? true : false;

          // check if first item or not
          isFirstTabStop = (activeEl === firstTabStop) ? true : false;
        }
      });
    },

    // apply pan effect hero image
    heroImgPanEffect() {
      const parent = this.$refs.heroSection;
      const layer1 = parent.querySelectorAll('.layer')[0];
      const layer2 = parent.querySelectorAll('.layer')[1];

      parent.addEventListener('mousemove', (e) => {
        const x = ((e.x - parent.getBoundingClientRect().x) / parent.offsetWidth) * 100;
        const y = ((e.y - parent.getBoundingClientRect().y) / parent.offsetHeight) * 100;

        parent.classList.add('parallax-animation');

        layer1.setAttribute('style', `transform-origin: ${x}vw ${y}vh;`);
        layer2.setAttribute('style', `transform-origin: ${x}vw ${y}vh;`);
      });
    },

    // scrolling options
    scrollingOptions() {
      const scrollPosition = window.pageYOffset;
    
      // check for current scroll position to minimize the header
      this.isHeaderBig = (scrollPosition >= this.startMinimizingHeaderAt) ? false : true;
    
      // check for current scroll position to toggle the header
      this.isHeaderHidden = ((scrollPosition > 100) && (scrollPosition > this.lastScrollPosition)) ? true : false;
      this.lastScrollPosition = scrollPosition;
    
      // check for current scroll position to show the scrollTop button
      this.isScrollTopBtnDisplayed = (scrollPosition >= this.startShowingScrollTopBtnAt) ? true : false;
    },

    // scroll to top
    scrollToTop() {
      window.scroll({ top: 0, behavior: 'smooth' });
    },

    // initialize VanillaTilt library in portfolio section
    initializeTilt() {
      const portfolioItems = this.$refs.portfolioItems;

      // return if disabled
      if (!portfolioItems) { return; }
      VanillaTilt.init(this.$refs.portfolioItems.querySelectorAll('.portfolio-item'), {
        max: 8,
        speed: 400,
        glare: true,
        'max-glare': 0.3
      });
    },

    // get portfolio items
    getPortfolioItems() {
      const size = 7;

      // check if there is more works or not
      if ((this.portfolioItemsPage - 1) * size + size < this.allPortfolioItems.length) {
        this.portfolioItemsPage++;
        const itemsArr = this.allPortfolioItems.slice((this.portfolioItemsPage - 1) * size, this.portfolioItemsPage * size);

        this.portfolioItems.push(...itemsArr);

        // initialize VanillaTilt for new items
        setTimeout(() => this.portfolioItemsPage > 1 && this.initializeTilt(), 0);

      } else {

        // show the message "No more works" to the user
        this.setNotify({
          className: 'danger',
          msg: this.$refs.portfolioItems.getAttribute('data-no-more-works-msg'),
          time: 3000
        });
      }
    },
     // filter portfolio items
     filterPortfolioItems(filter) {
      this.currentFilter = filter;
      this.portfolioItemsPage = 1;

      if (this.filteredPortfolioItems.length) {
        // initialize VanillaTilt for new items
        setTimeout(() => this.initializeTilt(), 0);

      } else {
        // get new portfolio items
        this.getPortfolioItems();
      }
    },

    // contact form validation
    contactFormValidation() {

      // contact form
      const contactForm = this.$refs.contactForm;

      // form controls
      const name        = contactForm.querySelector('input[name="name"]');
      const email       = contactForm.querySelector('input[name="email"]');
      const phone       = contactForm.querySelector('input[name="phone"]');
      const message     = contactForm.querySelector('textarea');

      // form validation status
      let errors = {
        name: { required: true, minLength: true },
        email: { required: true, invalid: true },
        phone: { invalid: true },
        message: { required: true }
      };

      /* --------------- */
      /* name validation */
      /* --------------- */

      // required validation
      if (name.value === '') {
        errors.name.required = true;
        this.setNotify({
          id: 'nameRequired',
          className: 'danger',
          msg: name.closest('.control').querySelector('.errors-msgs .required').value
        });

      } else {
        errors.name.required = false;
        this.dismissNotify('nameRequired');
      }

      // minlength validation
      if (name.value.length > 0 && name.value.length < name.getAttribute('minlength')) {
        errors.name.minLength = true;
        this.setNotify({
          id: 'nameMinLength',
          className: 'danger',
          msg: name.closest('.control').querySelector('.errors-msgs .minLength').value
        });

      } else {
        errors.name.minLength = false;
        this.dismissNotify('nameMinLength');
      }

      // toggle invalid errors & style classes
      if (Object.keys(errors.name).some(err => errors.name[err] === true)) {
        name.classList.remove('valid');
        name.classList.add('invalid');
      } else {
        name.classList.remove('invalid');
        name.classList.add('valid');
      }

      /* ---------------- */
      /* email validation */
      /* ---------------- */

      // required validation
      if (email.value === '') {
        errors.email.required = true;
        this.setNotify({
          id: 'emailRequired',
          className: 'danger',
          msg: email.closest('.control').querySelector('.errors-msgs .required').value
        });

      } else {
        errors.email.required = false;
        this.dismissNotify('emailRequired');
      }

      // email validation
      if (email.value.length > 0 && !/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email.value)) {
        errors.email.invalid = true;
        this.setNotify({
          id: 'emailInvalid',
          className: 'danger',
          msg: email.closest('.control').querySelector('.errors-msgs .invalid').value
        });

      } else {
        errors.email.invalid = false;
        this.dismissNotify('emailInvalid');
      }

      // toggle invalid errors & style classes
      if (Object.keys(errors.email).some(err => errors.email[err] === true)) {
        email.classList.remove('valid');
        email.classList.add('invalid');
      } else {
        email.classList.remove('invalid');
        email.classList.add('valid');
      }

      /* ---------------- */
      /* phone validation */
      /* ---------------- */

      // phone validation
      if (phone.value.length > 0 && !/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im.test(phone.value)) {
        errors.phone.invalid = true;
        this.setNotify({
          id: 'phoneInvalid',
          className: 'danger',
          msg: phone.closest('.control').querySelector('.errors-msgs .invalid').value
        });

      } else {
        errors.phone.invalid = false;
        this.dismissNotify('phoneInvalid');
      }

      // toggle invalid errors & style classes
      if (Object.keys(errors.phone).some(err => errors.phone[err] === true)) {
        phone.classList.remove('valid');
        phone.classList.add('invalid');
      } else {
        phone.classList.remove('invalid');
        phone.classList.add('valid');
      }

      /* ------------------ */
      /* message validation */
      /* ------------------ */

      // required validation
      if (message.value === '') {
        errors.message.required = true;
        this.setNotify({
          id: 'messageRequired',
          className: 'danger',
          msg: message.closest('.control').querySelector('.errors-msgs .required').value
        });

      } else {
        errors.message.required = false;
        this.dismissNotify('messageRequired');
      }

      // toggle invalid errors & style classes
      if (Object.keys(errors.message).some(err => errors.message[err] === true)) {
        message.classList.remove('valid');
        message.classList.add('invalid');
      } else {
        message.classList.remove('invalid');
        message.classList.add('valid');
      }

      // send the message if the form is valid
      (!Object.values(errors).some(control => Object.values(control).some(Boolean))) && this.sendContactFormMessage(contactForm);
    },

    // send message from contact form
    sendContactFormMessage(form) {
      const url = form.getAttribute('action');
      const formData = new FormData(form);

      // start loading spinner
      this.startLoading();

      // send post request
      fetch(url, { method: 'POST', body: formData })
        .then(res => res.text())
        .then(data => {
          if (data === 'success') {
            // show success message
            this.setNotify({ className: 'success', msg: form.getAttribute('data-success-msg'), time: 5000 });

            // reset all form inputs
            form.reset();

            // remove inputs valid classes
            form.querySelectorAll('.valid').forEach(el => el.classList.remove('valid'));

          } else if (data === 'error') {
            // show error message
            this.setNotify({ className: 'danger', msg: form.getAttribute('data-err-msg'), time: 5000 });
          }

          // end loading spinner
          this.endLoading();

          console.log(data);
        })
        .catch(err => console.log(err));
    },

    // show messages by toast notifications
    setNotify({id, className, msg, time}) {
      const notify = {
        id: id || `${Date.now()}${this.notifications.length}`,
        className,
        msg,
        time
      };

      if (id) {
        (!this.notifications.some(e => e.id === id)) && this.notifications.push(notify);

      } else { this.notifications.push(notify); }

      // remove this notification from the array after (n) seconds
      time && setTimeout(() => this.dismissNotify(notify.id), time);
    },

    // dismiss the notifications
    dismissNotify(id) {
      const index = this.notifications.findIndex(notify => notify.id === id);
      (index > -1) && this.notifications.splice(index, 1);
    },

    // add ajax loading spinner
    startLoading() {
      this.ajaxLoading.push(true);
    },

    // remove ajax loading spinner
    endLoading() {
      this.ajaxLoading.pop();
    }
  },
  computed: {

    // flag to toggle ajax loading spinner
    isAjaxLoading() {
      return this.ajaxLoading.some(state => state === true);
    },

    // get the total years of experience
    experienceYears() {
      return new Date(new Date() - new Date(String(this.careerStartDate))).getFullYear() - 1970;
    },

    // split experience items into chunks of 3 items
    experienceChunks() {
      return [...Array(Math.ceil(this.experienceItems.length / 3))].map(() => this.experienceItems.splice(0, 3));
    },

    // filtered portfolio items
    filteredPortfolioItems() {
      const urlParams = new URLSearchParams(window.location.search);
      const tax = urlParams.get('tax');

      if (tax) {
        return this.portfolioItems;

      } else {
        return this.portfolioItems.filter(item => this.currentFilter === 'All' || item.category === this.currentFilter);
      }
    },

    // get single portfolio item
    getSinglePortfolioItem() {
      const urlParams = new URLSearchParams(window.location.search);
      const id = urlParams.get('id');

      return this.allPortfolioItems.find(item => item.id == id);
    },

    // get the total years of copyright
    copyrightDate() {
      const yearsDuration = new Date(new Date() - new Date(String(this.copyrightStartDate))).getFullYear() - 1970;
      return yearsDuration === 0 ? this.copyrightStartDate : `${this.copyrightStartDate} - ${this.copyrightStartDate + yearsDuration}`;
    }
  },
  directives: {
    // clone directive
    clone: {
      mounted(el) {
        el.parentNode.insertBefore(el.cloneNode(true), el.nextSibling);
      }
    },

    // add stagger delay to children elements
    staggerdelay: {
      mounted(el, binding) {
        [...el.children].forEach((child, i) => {
          child.setAttribute('style', `animation-delay: ${(i + 1) * (binding.value || 100)}ms`);
        });
      }
    },

    // tooltip directive
    tooltip: {
      mounted(el, binding) {
        el.classList.add('has-tooltip');
        el.insertAdjacentHTML('beforeend', `<div class="custom-tooltip custom-tooltip-${binding.value.dir}">${binding.value.text}</div>`);
      }
    }
  }
});
app.mount('#app');
