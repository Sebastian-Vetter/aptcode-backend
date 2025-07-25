export type LandingType = {
    title: string,
    subtitle: string,
    heroImage: string,
    buttons: Button[],
}

type Button = {
    name: string,
    url: string,
}