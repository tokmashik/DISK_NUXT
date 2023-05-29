import { NuxtAuthHandler } from '#auth'
import GithubProvider from 'next-auth/providers/github'

export default NuxtAuthHandler({
    providers: [
        // @ts-expect-error You need to use .default here for it to work during SSR. May be fixed via Vite at some point
        GithubProvider.default({
           clientId: '11aeb76872d61cf12fb6',
           clientSecret: '8db435b251b4e42fd8cff55a4f7d4c2c4a34089d'
        })
    ]
})
