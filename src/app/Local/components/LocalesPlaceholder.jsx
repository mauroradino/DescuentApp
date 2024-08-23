import React from "react"
import ContentLoader from "react-content-loader"

const LocalesPlaceholder = (props) => (
    <ContentLoader
        speed={2}
        width={200}
        height={200}
        viewBox="0 0 200 200"
        backgroundColor="#ededed"
        foregroundColor="#c9c9c9"
        {...props}
    >
        <rect x="0" y="18" rx="0" ry="0" width={200} height={200}  />
    </ContentLoader>
)

export default LocalesPlaceholder