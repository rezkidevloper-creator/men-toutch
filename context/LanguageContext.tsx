import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'EN' | 'FR' | 'AR';

interface LanguageContextType {
    language: Language;
    setLanguage: (lang: Language) => void;
    t: (key: string) => string;
    dir: 'ltr' | 'rtl';
}

const translations = {
    EN: {
        home: 'Home',
        collection: 'Collection',
        about: 'About',
        contact: 'Contact',
        cart: 'Cart',
        shopCollection: 'Shop Collection',
        ourStory: 'Our Story',
        featuredCollection: 'Featured Collection',
        viewAll: 'View All',
        premiumQuality: 'Premium Quality',
        perfectFit: 'Perfect Fit',
        timelessStyle: 'Timeless Style',
    },
    FR: {
        home: 'Accueil',
        collection: 'Collection',
        about: 'À Propos',
        contact: 'Contact',
        cart: 'Panier',
        shopCollection: 'Découvrir',
        ourStory: 'Notre Histoire',
        featuredCollection: 'Collection Vedette',
        viewAll: 'Voir Tout',
        premiumQuality: 'Qualité Premium',
        perfectFit: 'Coupe Parfaite',
        timelessStyle: 'Style Intemporel',
    },
    AR: {
        home: 'الرئيسية',
        collection: 'التشكيلة',
        about: 'من نحن',
        contact: 'اتصل بنا',
        cart: 'السلة',
        shopCollection: 'تصفح المجموعة',
        ourStory: 'قصتنا',
        featuredCollection: 'مجموعة مميزة',
        viewAll: 'عرض الكل',
        premiumQuality: 'جودة عالية',
        perfectFit: 'مقاس مثالي',
        timelessStyle: 'أناقة خالدة',
    }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
    const [language, setLanguage] = useState<Language>('FR'); // Default to French for Algeria

    const t = (key: string) => {
        return translations[language][key as keyof typeof translations['EN']] || key;
    };

    const dir = language === 'AR' ? 'rtl' : 'ltr';

    return (
        <LanguageContext.Provider value={{ language, setLanguage, t, dir }}>
            <div dir={dir} className={language === 'AR' ? 'font-arabic' : 'font-sans'}>
                {children}
            </div>
        </LanguageContext.Provider>
    );
};

export const useLanguage = () => {
    const context = useContext(LanguageContext);
    if (!context) {
        throw new Error('useLanguage must be used within a LanguageProvider');
    }
    return context;
};
