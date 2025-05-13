import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

const resources = {
    en: {
        translation: {
            welcome: "Welcome",
            description: "This is a multilingual app.",
            change_language: "Change Language",
            profile: {
                line1: "I am a cybersecurity analyst, an advocate for Linux, and full-stack software developer with proficiency in Python, API development, and automation. I build scalable, secure solutions by combining my passion for open-source software with cybersecurity.",
                line2: "Any cooperative initiatives are welcome! 🚀 I enjoy working on exciting projects and interacting with other brilliant individuals gives me a sense of purpose and pure joy. SWE is comparable to an enormous creative and problem-solving playground where each new line of code is an exciting new journey just waiting to be discovered. My desire to learn more and keep up with the latest developments in technology is what motivates me.",
                line3: " These projects are not just about code; they're about creating something meaningful, pushing boundaries, and leaving a mark in the digital world. It's a journey full of difficulties, but every difficulty presents a chance for development and education. 🌟 So, here's to the exciting road ahead, where every project is a new story waiting to be written! 💻",
            },
            contacts:
                "I value connections and conversations that foster learning and new perspectives. Feel free to reach out with questions, suggestions, or just to connect. I'm also open to project collaborations, so if you have an idea in mind, don’t hesitate to share it. Beyond my tech interests—cybersecurity, software development, and cryptocurrency—I’m learning Spanish and pushing my limits with endurance running.",
            navigation: {
                link1: "Home",
                link2: "Projects",
                link3: "Certifications",
                link4: "Techstack",
                link5: "Socials",
                link6: "Contacts",
                link7: "Misc",
            },
            footer: "Powered by TypeScript and good vibes — from the desk of",
        },
    },
    es: {
        translation: {
            welcome: "Bienvenido",
            description: "Esta es una aplicación multilingüe.",
            change_language: "Cambiar idioma",
            profile: {
                line1: "Soy analista de ciberseguridad, defensor de Linux y desarrollador de software full-stack con conocimientos de Python, desarrollo de API y automatización. Creo soluciones escalables y seguras combinando mi pasión por el software de código abierto con la ciberseguridad.",
                line2: "¡Cualquier iniciativa cooperativa es bienvenida! 🚀 Disfruto trabajando en proyectos emocionantes e interactuando con otras personas brillantes que me dan un sentido de propósito y pura alegría. SWE es comparable a un enorme patio de juegos creativo y de resolución de problemas donde cada nueva línea de código es un nuevo y emocionante viaje que espera ser descubierto. Mi deseo de aprender más y mantenerme al día con los últimos avances en tecnología es lo que me motiva.",
                line3: "Estos proyectos no se tratan solo de código; se trata de crear algo significativo, superar límites y dejar una marca en el mundo digital. Es un viaje lleno de dificultades, pero cada dificultad presenta una oportunidad para el desarrollo y la educación. 🌟 Así que, ¡a por el emocionante camino que tenemos por delante, donde cada proyecto es una nueva historia esperando ser escrita!",
            },
            contacts:
                "Valoro las conexiones y las conversaciones que fomentan el aprendizaje y las nuevas perspectivas. No dudes en contactarme si tienes preguntas, sugerencias o simplemente para conectarte. También estoy abierto a colaborar en proyectos, así que si tienes una idea en mente, no dudes en compartirla. Más allá de mis intereses tecnológicos (ciberseguridad, desarrollo de software y criptomonedas), estoy aprendiendo español y superando mis límites con las carreras de resistencia.",
            navigation: {
                link1: "Hogar",
                link2: "Proyectos",
                link3: "Certificaciones",
                link4: "Pila tecnológica",
                link5: "Sociales",
                link6: "Contactos",
                link7: "Misc",
            },
            footer: "Desarrollado con TypeScript y buenas vibras: desde el escritorio de",
        },
    },
    sw: {
        translation: {
            welcome: "Karibu",
            description: "Hii ni programu ya lugha nyingi.",
            change_language: "Badilisha Lugha",
            profile: {
                line1: "Mimi ni mchambuzi wa usalama wa mtandao, wakili wa Linux, na msanidi programu kamili mwenye ustadi wa Python, ukuzaji wa API, na otomatiki. Ninaunda masuluhisho makubwa na salama kwa kuchanganya mapenzi yangu ya programu huria na usalama wa mtandao.",
                line2: "Mipango yoyote ya ushirika inakaribishwa! 🚀 Ninafurahia kufanya kazi kwenye miradi ya kusisimua na kuwasiliana na watu wengine mahiri hunipa hali ya kusudi na furaha tupu. SWE inalinganishwa na uwanja mkubwa wa michezo wa ubunifu na wa kutatua matatizo ambapo kila safu mpya ya msimbo ni safari mpya ya kusisimua inayosubiri kugunduliwa. Hamu yangu ya kujifunza zaidi na kuendelea na maendeleo ya hivi punde katika teknolojia ndiyo hunitia moyo.",
                line3: " Miradi hii sio tu kuhusu kanuni; zinahusu kuunda kitu cha maana, kusukuma mipaka, na kuacha alama katika ulimwengu wa kidijitali. Ni safari iliyojaa matatizo, lakini kila ugumu unatoa nafasi kwa maendeleo na elimu. 🌟 Kwa hivyo, hapa kuna barabara ya kusisimua inayokuja, ambapo kila mradi ni hadithi mpya inayosubiri kuandikwa! 💻",
            },
            contacts:
                "Ninathamini miunganisho na mazungumzo ambayo yanakuza kujifunza na mitazamo mipya. Jisikie huru kuwasiliana na maswali, mapendekezo, au kuunganisha tu. Pia niko tayari kwa ushirikiano wa mradi, kwa hivyo ikiwa una wazo akilini, usisite kulishiriki. Zaidi ya maslahi yangu ya teknolojia—usalama mtandaoni, ukuzaji wa programu na cryptocurrency—ninajifunza Kihispania na kusukuma mipaka yangu kwa uvumilivu unaoendelea.",
            navigation: {
                link1: "Nyumbani",
                link2: "Miradi",
                link3: "Vyeti",
                link4: "Rundo la kiteknolojia",
                link5: "Kijamii",
                link6: "Anwani",
                link7: "Zingine",
            },
            footer: "Inaendeshwa na TypeScript na mitetemo nzuri - kutoka kwa dawati la",
        },
    },
};

i18n.use(initReactI18next) // Pass i18n instance to react-i18next
    .use(LanguageDetector) // Detects user's language preference
    .init({
        resources,
        returnObjects: true,
        lng: "en", // default language
        fallbackLng: "en", // fallback language
        debug: true, // Shows logs in the console
        interpolation: {
            escapeValue: false, // React already protects against XSS
        },
    });

export default i18n;
