import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'


function AuthLayout({ children, authentication = true }) {

    const [loading, setloading] = useState(true)
    const authStatus = useSelector((state) => state.status)
    const navigate = useNavigate()

    useEffect(() => {
        try {
            if (authentication && !authStatus) {
                navigate('/login')
            } else if (!authentication && authStatus) {
                navigate('/')
            }
        } catch (error) {
            console.log('error at authentication', error)
        }
        setloading(false)

    }, [authStatus, authentication, navigate])

    return !loading ? (
        <div>
            loading...
        </div>
    ) : (
        <div>
            {children}
        </div>
    )
}

export default AuthLayout
