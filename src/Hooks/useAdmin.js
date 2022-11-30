import { useEffect, useState } from "react"

const useAdmin = email => {
    const [isAdmin, setIdAdmin] = useState(false)
    const [isAdminLoading, setIsAdminLoading] = useState(true)
    useEffect(() => {
        if (email) {
            fetch(`https://book-resell-server-fmhasibul.vercel.app/users/admin/${email}`)
                .then((res) => res.json())
                .then((data) => {

                    setIdAdmin(data.isAdmin);
                    setIsAdminLoading(false)
                });
        }
    }, [email])
    return [isAdmin, isAdminLoading];
}

export default useAdmin;