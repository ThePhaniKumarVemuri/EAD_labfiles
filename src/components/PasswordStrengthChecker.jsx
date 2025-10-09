import { useState } from 'react'

export default function PasswordStrengthChecker() {
    const [password, setPassword] = useState('')
    const [showPassword, setShowPassword] = useState(false)

    // returns numeric score 0..6
    function getPasswordScore(password) {
        if (!password) return 0

        let score = 0

        if (password.length >= 8) score += 1
        if (password.length >= 12) score += 1

        // USING REGEX TO CHECK FOR CHARACTER TYPES
        if (/[a-z]/.test(password)) score += 1
        if (/[A-Z]/.test(password)) score += 1
        if (/[0-9]/.test(password)) score += 1
        if (/[^A-Za-z0-9]/.test(password)) score += 1

        return score
    }

    function getPasswordStrength(password) {
        const score = getPasswordScore(password)
        if (score <= 1) return 'Very Weak'
        if (score === 2) return 'Weak'
        if (score === 3) return 'Medium'
        if (score === 4) return 'Strong'
        return 'Very Strong'
    }

    function strengthColor(score) {
        // score 0..6 -> color and percent
        if (score <= 1) return { color: '#e74c3c', percent: 16 } // red
        if (score === 2) return { color: '#e67e22', percent: 34 } // orange
        if (score === 3) return { color: '#f1c40f', percent: 50 } // yellow
        if (score === 4) return { color: '#2ecc71', percent: 75 } // light green
        return { color: '#27ae60', percent: 100 } // green
    }

    return (
        <div>
            <input
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <button onClick={() => setShowPassword(!showPassword)}>
                {showPassword ? 'Hide' : 'Show'}
            </button>
            <div style={{ marginTop: 8 }}>
                <div style={{ fontSize: 14, marginBottom: 6 }}>
                    Password strength: {getPasswordStrength(password)}
                </div>
                <div style={{ height: 10, background: '#e6e6e6', borderRadius: 6, overflow: 'hidden' }}>
                    <div
                        style={{
                            height: '100%',
                            width: `${strengthColor(getPasswordScore(password)).percent}%`,
                            background: strengthColor(getPasswordScore(password)).color,
                            transition: 'width 150ms ease'
                        }}
                    />
                </div>
            </div>
        </div>
    )
}