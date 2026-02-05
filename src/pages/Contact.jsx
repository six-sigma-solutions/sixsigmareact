import { useState, useRef } from 'react'

const RULES = {
  nameMin: 3,
  mobileLength: 10,
  messageMin: 10
}

function Contact() {
  const [formData, setFormData] = useState({
    fullName: '',
    mobile: '',
    email: '',
    message: ''
  })
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState({ message: '', type: '' })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const debounceTimers = useRef({})

  const validateField = (name, value) => {
    switch (name) {
      case 'fullName':
        if (value && value.length < RULES.nameMin) {
          return '⚠️ Name must be at least 3 characters'
        }
        break
      case 'mobile':
        if (value && value.length !== RULES.mobileLength) {
          return '⚠️ Mobile must be 10 digits'
        }
        break
      case 'email':
        if (value && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
          return '⚠️ Invalid email format'
        }
        break
      case 'message':
        if (value && value.length < RULES.messageMin) {
          return '⚠️ Minimum 10 characters required'
        }
        break
    }
    return ''
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    let processedValue = value

    // Input filtering
    if (name === 'fullName') {
      processedValue = value.replace(/[^a-zA-Z\s]/g, '')
    } else if (name === 'mobile') {
      processedValue = value.replace(/[^0-9]/g, '').slice(0, 10)
    }

    setFormData(prev => ({ ...prev, [name]: processedValue }))
    
    // Clear error immediately
    setErrors(prev => ({ ...prev, [name]: '' }))

    // Debounced validation
    clearTimeout(debounceTimers.current[name])
    debounceTimers.current[name] = setTimeout(() => {
      const error = validateField(name, processedValue)
      if (error) {
        setErrors(prev => ({ ...prev, [name]: error }))
      }
    }, 700)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!navigator.onLine) {
      setStatus({ message: '⚠️ You are offline. Please check your connection.', type: 'error' })
      return
    }

    // Validate all fields
    const newErrors = {}
    let hasError = false

    if (formData.fullName.length < RULES.nameMin) {
      newErrors.fullName = '⚠️ Enter a valid name'
      hasError = true
    }
    if (formData.mobile.length !== RULES.mobileLength) {
      newErrors.mobile = '⚠️ Enter a valid mobile number'
      hasError = true
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = '⚠️ Enter a valid email'
      hasError = true
    }
    if (formData.message.length < RULES.messageMin) {
      newErrors.message = '⚠️ Message must be at least 10 characters'
      hasError = true
    }

    setErrors(newErrors)

    if (hasError) {
      setStatus({ message: '⚠️ Please fix the errors above', type: 'error' })
      return
    }

    setIsSubmitting(true)
    setStatus({ message: '', type: '' })

    try {
      await fetch('https://script.google.com/macros/s/AKfycbzC7f_00D8bSIomyyZ_U-BYBM3ZhbpVmo1mF9xZHtvWofF0vWtOifqtjcyA-5cqhBgwaw/exec', {
        method: 'POST',
        body: JSON.stringify({
          fullName: formData.fullName.trim(),
          mobile: formData.mobile.trim(),
          email: formData.email.trim().toLowerCase(),
          message: formData.message.trim()
        })
      })

      setStatus({ message: '✅ Message sent successfully!', type: 'success' })
      setFormData({ fullName: '', mobile: '', email: '', message: '' })
    } catch {
      setStatus({ message: '⚠️ Submission failed. Try again.', type: 'error' })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <main className="pt-32 pb-24 px-6 max-w-4xl mx-auto">
      <div 
        className="p-12 bg-white border border-slate-200 rounded-[2rem] shadow-xl"
        data-aos="fade-up"
      >
        <h2 className="text-3xl font-bold text-navy mb-4">Let's Build Something Amazing</h2>
        <p className="text-slate-500 mb-12">
          Ready to optimize your business? Reach out to us today.
        </p>

        <form onSubmit={handleSubmit} className="space-y-8" noValidate>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Full Name */}
            <div className="input-wrapper relative min-h-[64px]">
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                autoComplete="name"
                maxLength={40}
                placeholder="Full Name"
                className={`w-full border-b-2 py-4 focus:border-teal outline-none transition-colors ${
                  errors.fullName ? 'border-red-500' : 'border-slate-200'
                }`}
              />
              {errors.fullName && (
                <div className="absolute top-full left-0 mt-2 bg-red-500 text-white px-3 py-2 rounded-lg text-xs font-semibold z-10 animate-tooltip">
                  {errors.fullName}
                </div>
              )}
            </div>

            {/* Mobile */}
            <div className="input-wrapper relative min-h-[64px]">
              <input
                type="tel"
                name="mobile"
                value={formData.mobile}
                onChange={handleChange}
                autoComplete="tel"
                maxLength={10}
                inputMode="numeric"
                placeholder="Mobile Number"
                className={`w-full border-b-2 py-4 focus:border-teal outline-none transition-colors ${
                  errors.mobile ? 'border-red-500' : 'border-slate-200'
                }`}
              />
              {errors.mobile && (
                <div className="absolute top-full left-0 mt-2 bg-red-500 text-white px-3 py-2 rounded-lg text-xs font-semibold z-10 animate-tooltip">
                  {errors.mobile}
                </div>
              )}
            </div>
          </div>

          {/* Email */}
          <div className="input-wrapper relative min-h-[64px]">
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              autoComplete="email"
              maxLength={80}
              placeholder="Email Address"
              className={`w-full border-b-2 py-4 focus:border-teal outline-none transition-colors ${
                errors.email ? 'border-red-500' : 'border-slate-200'
              }`}
            />
            {errors.email && (
              <div className="absolute top-full left-0 mt-2 bg-red-500 text-white px-3 py-2 rounded-lg text-xs font-semibold z-10 animate-tooltip">
                {errors.email}
              </div>
            )}
          </div>

          {/* Message */}
          <div className="input-wrapper relative min-h-[64px]">
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={3}
              minLength={10}
              maxLength={500}
              placeholder="Tell us about your project"
              className={`w-full border-b-2 py-4 focus:border-teal outline-none transition-colors resize-none ${
                errors.message ? 'border-red-500' : 'border-slate-200'
              }`}
            />
            {errors.message && (
              <div className="absolute top-full left-0 mt-2 bg-red-500 text-white px-3 py-2 rounded-lg text-xs font-semibold z-10 animate-tooltip">
                {errors.message}
              </div>
            )}
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="block w-full min-h-[56px] bg-teal-600 text-white py-5 rounded-xl font-bold text-lg shadow-lg hover:bg-teal-700 transition focus:outline-none focus:ring-4 focus:ring-teal-300 disabled:opacity-70 disabled:cursor-not-allowed"
          >
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </button>

          {status.message && (
            <p 
              className={`text-center text-sm font-semibold ${
                status.type === 'success' ? 'text-green-600' : 'text-red-600'
              }`}
              role="alert"
            >
              {status.message}
            </p>
          )}
        </form>
      </div>
    </main>
  )
}

export default Contact
