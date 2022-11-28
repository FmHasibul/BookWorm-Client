import { useEffect } from "react"

const useTitle = (title) => {
    useEffect(() => {
        document.title = `${title}- ReadersHost`
    }, [title])
}
export default useTitle;