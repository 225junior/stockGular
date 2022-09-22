export interface Menu {
    id: number;
    icon: string;
    title: string;
    url: string;
    subMenu?: Menu[]
}

export const MenuData: Menu[] =
    [
        {
            id: 1, icon: '', title: 'Tableau de Bord', url: '',
            subMenu: [
                { id: 11, icon: '', title: "Vue d'ensemble", url: '' },
                { id: 12, icon: '', title: "Statistiques", url: 'statistiques' }
            ]
        },
        {
            id: 2, icon: '', title: 'Articles', url: '',
            subMenu: [
                { id: 21, icon: '', title: "Articles", url: 'articles' },
                { id: 22, icon: '', title: "Mouvement stock", url: '' }
            ]
        },
        {
            id: 3, icon: '', title: 'Clients', url: '',
            subMenu: [
                { id: 31, icon: '', title: "Clients", url: '' },
                { id: 32, icon: '', title: "Commandes Client", url: '' }
            ]
        },
        {
            id: 4, icon: '', title: 'Forunisseurs', url: '',
            subMenu: [
                { id: 41, icon: '', title: "Forunisseurs", url: '' },
                { id: 42, icon: '', title: "Commandes Forunisseur", url: '' }
            ]
        },
        {
            id: 5, icon: '', title: 'Parametrages', url: '',
            subMenu: [
                { id: 51, icon: '', title: "Categories", url: '' },
                { id: 52, icon: '', title: "Utilisateurs", url: '' }
            ]
        },
    ]