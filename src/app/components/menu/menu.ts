export interface Menu {
    id: number;
    icon: string;
    title: string;
    url: string;
    subMenu?: Menu[],
    isActive?: boolean
}

export const MenuData: Menu[] =
    [
        {
            id: 1, icon: '', title: 'Tableau de Bord', url: '',
            subMenu: [
                { id: 11, icon: '', title: "Vue d'ensemble", url: '', isActive: false },
                { id: 12, icon: '', title: "Statistiques", url: 'statistiques', isActive: false }
            ]
        },
        {
            id: 2, icon: '', title: 'Articles', url: '',
            subMenu: [
                { id: 21, icon: '', title: "Articles", url: 'articles', isActive: false },
                { id: 22, icon: '', title: "Mouvement stock", url: 'move-stock', isActive: false }
            ]
        },
        {
            id: 3, icon: '', title: 'Clients', url: '',
            subMenu: [
                { id: 31, icon: '', title: "Clients", url: 'clients', isActive: false },
                { id: 32, icon: '', title: "Commandes Client", url: 'commande-client', isActive: false }
            ]
        },
        {
            id: 4, icon: '', title: 'Forunisseurs', url: '',
            subMenu: [
                { id: 41, icon: '', title: "Forunisseurs", url: 'fournisseurs', isActive: false },
                { id: 42, icon: '', title: "Commandes Forunisseur", url: 'commande-fournisseur', isActive: false }
            ]
        },
        {
            id: 5, icon: '', title: 'Parametrages', url: '',
            subMenu: [
                { id: 51, icon: '', title: "Categories", url: 'categories', isActive: false },
                { id: 52, icon: '', title: "Utilisateurs", url: 'utilisateurs', isActive: false }
            ]
        },
    ]