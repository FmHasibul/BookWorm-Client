import { useEffect } from "react"

const useTitle = (title) => {
    useEffect(() => {
        document.title = `${title}- Book Warm`
    }, [title])
}
export default useTitle;