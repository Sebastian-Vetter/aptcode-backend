export type Header = {
    navLinks: NavLink[],
    logoName: string,
    logoImage: string,
}

type NavLink = {
    displayName: string;
    url: string;
}