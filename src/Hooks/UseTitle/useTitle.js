import { useEffect } from "react"

const useTitle = (title) => {
    useEffect(() => {
        document.title = `${title}- Book Worm`
    }, [title])
}
export default useTitle;