import SbEditable from 'storyblok-react'
import Teaser from './Teaser'
import BlogPost from "./BlogPost";

// resolve Storyblok components to Next.js components
const Components = {
    'teaser': Teaser,
    'blogpost': BlogPost,
}

const DynamicComponent = ({blok}) => {
    // check if component is defined above
    if (typeof Components[blok.component] !== 'undefined') {
        const Component = Components[blok.component]
        // wrap with SbEditable for visual editing
        return (<SbEditable content={blok}><Component blok={blok} /></SbEditable>)
    }

    return (<p>The component <strong>{blok.component}</strong> has not been created yet.</p>)
}

export default DynamicComponent