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
  const [buttonState, setButtonState] = useState('default')
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

    if (name === 'fullName') {
      processedValue = value.replace(/[^a-zA-Z\s]/g, '')
    } else if (name === 'mobile') {
      processedValue = value.replace(/[^0-9]/g, '').slice(0, 10)
    }

    setFormData(prev => ({ ...prev, [name]: processedValue }))
    setErrors(prev => ({ ...prev, [name]: '' }))

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
    setButtonState('sending')
    setStatus({ message: '', type: '' })

    try {
      const formDataToSend = new FormData()
      formDataToSend.append('fullName', formData.fullName.trim())
      formDataToSend.append('mobile', formData.mobile.trim())
      formDataToSend.append('email', formData.email.trim().toLowerCase())
      formDataToSend.append('message', formData.message.trim())

      await fetch('https://script.google.com/macros/s/AKfycbzC7f_00D8bSIomyyZ_U-BYBM3ZhbpVmo1mF9xZHtvWofF0vWtOifqtjcyA-5cqhBgwaw/exec', {
        method: 'POST',
        body: formDataToSend,
        mode: 'no-cors'
      })

      setButtonState('sent')
      setFormData({ fullName: '', mobile: '', email: '', message: '' })

      setTimeout(() => {
        setButtonState('default')
      }, 3000)
    } catch (error) {
      console.error('Submission error:', error)
      setStatus({ message: '⚠️ Submission failed. Try again.', type: 'error' })
      setButtonState('default')
    } finally {
      setIsSubmitting(false)
    }
  }

  const renderAnimatedLabel = (text) => {
    return text.split('').map((char, index) => (
        <span key={index} style={{ transitionDelay: `${index * 50}ms` }}>
        {char === ' ' ? '\u00A0' : char}
      </span>
    ))
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
              <div className="form-control-wrapper">
                <div className="form-control">
                  <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      autoComplete="name"
                      maxLength={40}
                      required
                      className={errors.fullName ? 'error' : ''}
                  />
                  <label>
                    {renderAnimatedLabel('Full Name')}
                  </label>
                </div>
                {errors.fullName && (
                    <div className="error-tooltip">
                      {errors.fullName}
                    </div>
                )}
              </div>

              {/* Mobile */}
              <div className="form-control-wrapper">
                <div className="form-control">
                  <input
                      type="tel"
                      name="mobile"
                      value={formData.mobile}
                      onChange={handleChange}
                      autoComplete="tel"
                      maxLength={10}
                      inputMode="numeric"
                      required
                      className={errors.mobile ? 'error' : ''}
                  />
                  <label>
                    {renderAnimatedLabel('Mobile Number')}
                  </label>
                </div>
                {errors.mobile && (
                    <div className="error-tooltip">
                      {errors.mobile}
                    </div>
                )}
              </div>
            </div>

            {/* Email */}
            <div className="form-control-wrapper">
              <div className="form-control">
                <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    autoComplete="email"
                    maxLength={80}
                    required
                    className={errors.email ? 'error' : ''}
                />
                <label>
                  {renderAnimatedLabel('Email Address')}
                </label>
              </div>
              {errors.email && (
                  <div className="error-tooltip">
                    {errors.email}
                  </div>
              )}
            </div>

            {/* Message */}
            <div className="form-control-wrapper">
              <div className="form-control">
              <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={3}
                  minLength={10}
                  maxLength={500}
                  required
                  className={errors.message ? 'error' : ''}
              />
                <label>
                  {renderAnimatedLabel('Tell us about your project')}
                </label>
              </div>
              {errors.message && (
                  <div className="error-tooltip">
                    {errors.message}
                  </div>
              )}
            </div>

            {/* Animated Submit Button */}
            <button
                type="submit"
                disabled={isSubmitting}
                className={`animated-send-button ${buttonState === 'sending' ? 'sending' : ''} ${buttonState === 'sent' ? 'sent' : ''}`}
            >
              <div className={`button-state state-default ${buttonState !== 'default' && buttonState !== 'sending' ? 'hide' : ''}`}>
                <div className="button-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" height="1.2em" width="1.2em">
                    <g style={{filter: 'url(#shadow)'}}>
                      <path fill="currentColor" d="M14.2199 21.63C13.0399 21.63 11.3699 20.8 10.0499 16.83L9.32988 14.67L7.16988 13.95C3.20988 12.63 2.37988 10.96 2.37988 9.78001C2.37988 8.61001 3.20988 6.93001 7.16988 5.60001L15.6599 2.77001C17.7799 2.06001 19.5499 2.27001 20.6399 3.35001C21.7299 4.43001 21.9399 6.21001 21.2299 8.33001L18.3999 16.82C17.0699 20.8 15.3999 21.63 14.2199 21.63ZM7.63988 7.03001C4.85988 7.96001 3.86988 9.06001 3.86988 9.78001C3.86988 10.5 4.85988 11.6 7.63988 12.52L10.1599 13.36C10.3799 13.43 10.5599 13.61 10.6299 13.83L11.4699 16.35C12.3899 19.13 13.4999 20.12 14.2199 20.12C14.9399 20.12 16.0399 19.13 16.9699 16.35L19.7999 7.86001C20.3099 6.32001 20.2199 5.06001 19.5699 4.41001C18.9199 3.76001 17.6599 3.68001 16.1299 4.19001L7.63988 7.03001Z" />
                      <path fill="currentColor" d="M10.11 14.4C9.92005 14.4 9.73005 14.33 9.58005 14.18C9.29005 13.89 9.29005 13.41 9.58005 13.12L13.16 9.53C13.45 9.24 13.93 9.24 14.22 9.53C14.51 9.82 14.51 10.3 14.22 10.59L10.64 14.18C10.5 14.33 10.3 14.4 10.11 14.4Z" />
                    </g>
                    <defs>
                      <filter id="shadow">
                        <feDropShadow floodOpacity="0.6" stdDeviation="0.8" dy={1} dx={0} />
                      </filter>
                    </defs>
                  </svg>
                </div>
                <p>
                  {['S', 'e', 'n', 'd', ' ', 'M', 'e', 's', 's', 'a', 'g', 'e'].map((char, i) => (
                      <span key={i} style={{'--char-index': i}}>{char}</span>
                  ))}
                </p>
              </div>
              <div className={`button-state state-sent ${buttonState === 'sent' ? 'show' : ''}`}>
                <div className="button-icon">
                  <svg stroke="currentColor" strokeWidth="0.5px" width="1.2em" height="1.2em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g style={{filter: 'url(#shadow)'}}>
                      <path d="M12 22.75C6.07 22.75 1.25 17.93 1.25 12C1.25 6.07 6.07 1.25 12 1.25C17.93 1.25 22.75 6.07 22.75 12C22.75 17.93 17.93 22.75 12 22.75ZM12 2.75C6.9 2.75 2.75 6.9 2.75 12C2.75 17.1 6.9 21.25 12 21.25C17.1 21.25 21.25 17.1 21.25 12C21.25 6.9 17.1 2.75 12 2.75Z" fill="currentColor" />
                      <path d="M10.5795 15.5801C10.3795 15.5801 10.1895 15.5001 10.0495 15.3601L7.21945 12.5301C6.92945 12.2401 6.92945 11.7601 7.21945 11.4701C7.50945 11.1801 7.98945 11.1801 8.27945 11.4701L10.5795 13.7701L15.7195 8.6301C16.0095 8.3401 16.4895 8.3401 16.7795 8.6301C17.0695 8.9201 17.0695 9.4001 16.7795 9.6901L11.1095 15.3601C10.9695 15.5001 10.7795 15.5801 10.5795 15.5801Z" fill="currentColor" />
                    </g>
                  </svg>
                </div>
                <p>
                  {['S', 'e', 'n', 't', '!'].map((char, i) => (
                      <span key={i} style={{'--char-index': i + 5}}>{char}</span>
                  ))}
                </p>
              </div>
            </button>

            {status.message && status.type === 'error' && (
                <p className="text-center text-sm font-semibold text-red-600" role="alert">
                  {status.message}
                </p>
            )}
          </form>
        </div>

        <style>{`
        /* Animated Form Controls */
        .form-control-wrapper {
          position: relative;
          margin: 20px 0 40px;
        }

        .form-control {
          position: relative;
          width: 100%;
        }

        .form-control input,
        .form-control textarea {
          background-color: transparent;
          border: 0;
          border-bottom: 2px solid #cbd5e1;
          display: block;
          width: 100%;
          padding: 15px 0;
          font-size: 18px;
          color: #0A2540;
          transition: border-color 0.3s ease;
        }

        .form-control textarea {
          resize: none;
          font-family: inherit;
        }

        .form-control input:focus,
        .form-control input:valid,
        .form-control textarea:focus,
        .form-control textarea:valid {
          outline: 0;
          border-bottom-color: #14B8A6;
        }

        .form-control input.error,
        .form-control textarea.error {
          border-bottom-color: #ef4444;
        }

        .form-control label {
          position: absolute;
          top: 15px;
          left: 0;
          pointer-events: none;
        }

        .form-control label span {
          display: inline-block;
          font-size: 18px;
          min-width: 5px;
          color: #64748b;
          transition: 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
        }

        .form-control input:focus + label span,
        .form-control input:valid + label span,
        .form-control textarea:focus + label span,
        .form-control textarea:valid + label span {
          color: #14B8A6;
          transform: translateY(-30px);
          font-size: 14px;
        }

        .error-tooltip {
          position: absolute;
          top: calc(100% + 8px);
          left: 0;
          background-color: #ef4444;
          color: white;
          padding: 8px 12px;
          border-radius: 8px;
          font-size: 12px;
          font-weight: 600;
          z-index: 10;
          animation: slideIn 0.3s ease;
        }

        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateY(-5px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        /* Button Styles */
        .animated-send-button {
          cursor: pointer;
          border-radius: 16px;
          border: none;
          background: linear-gradient(135deg, #14B8A6 0%, #0f9b8e 100%);
          box-shadow: 0 4px 12px rgba(20, 184, 166, 0.3);
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          width: 100%;
          padding: 22px;
          min-height: 72px;
          font-family: "Inter", system-ui, sans-serif;
          font-size: 19px;
          font-weight: 600;
          color: white;
        }

        .animated-send-button:hover:not(:disabled) {
          transform: translateY(-2px);
          box-shadow: 0 6px 16px rgba(20, 184, 166, 0.4);
        }

        .animated-send-button:active:not(:disabled) {
          transform: scale(0.98);
        }

        .animated-send-button:disabled {
          opacity: 0.7;
          cursor: not-allowed;
        }

        .button-state {
          padding-left: 29px;
          z-index: 2;
          display: flex;
          position: relative;
        }

        .button-state p {
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .button-icon {
          position: absolute;
          left: 0;
          top: 0;
          bottom: 0;
          margin: auto;
          transform: scale(1.25);
          transition: all 0.3s ease;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .button-icon svg {
          overflow: visible;
        }

        .button-state p span {
          display: block;
          opacity: 0;
          animation: slideDown 0.8s ease forwards;
          animation-delay: calc(var(--char-index) * 0.03s);
        }

        .animated-send-button:hover .button-state p span {
          animation: wave 0.5s ease forwards;
          animation-delay: calc(var(--char-index) * 0.02s);
        }

        @keyframes wave {
          30% {
            opacity: 1;
            transform: translateY(4px);
          }
          50% {
            opacity: 1;
            transform: translateY(-4px);
            color: #0d9488;
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideDown {
          0% {
            opacity: 0;
            transform: translateY(-20px) translateX(5px) rotate(-90deg);
            filter: blur(5px);
          }
          30% {
            opacity: 1;
            transform: translateY(4px) translateX(0) rotate(0);
            filter: blur(0);
          }
          50% {
            opacity: 1;
            transform: translateY(-3px) translateX(0) rotate(0);
          }
          100% {
            opacity: 1;
            transform: translateY(0) translateX(0) rotate(0);
          }
        }

        .state-default .button-icon svg {
          animation: land 0.6s ease forwards;
        }

        .animated-send-button:hover .state-default .button-icon {
          transform: rotate(45deg) scale(1.25);
        }

        .animated-send-button.sending .state-default .button-icon svg {
          animation: takeOff 0.8s linear forwards;
        }

        .animated-send-button.sending .state-default .button-icon {
          transform: rotate(0) scale(1.25);
        }

        @keyframes takeOff {
          0% {
            opacity: 1;
          }
          60% {
            opacity: 1;
            transform: translateX(80px) rotate(45deg) scale(2.2);
          }
          100% {
            opacity: 0;
            transform: translateX(180px) rotate(45deg) scale(0);
          }
        }

        @keyframes land {
          0% {
            transform: translateX(-60px) translateY(30px) rotate(-50deg) scale(2);
            opacity: 0;
            filter: blur(3px);
          }
          100% {
            transform: translateX(0) translateY(0) rotate(0);
            opacity: 1;
            filter: blur(0);
          }
        }

        .state-default .button-icon:before {
          content: "";
          position: absolute;
          top: 50%;
          height: 2px;
          width: 0;
          left: -5px;
          background: linear-gradient(to right, transparent, rgba(255, 255, 255, 0.5));
        }

        .animated-send-button.sending .state-default .button-icon:before {
          animation: contrail 0.8s linear forwards;
        }

        @keyframes contrail {
          0% {
            width: 0;
            opacity: 1;
          }
          8% {
            width: 15px;
          }
          60% {
            opacity: 0.7;
            width: 80px;
          }
          100% {
            opacity: 0;
            width: 160px;
          }
        }

        .state-sent {
          display: none;
        }

        .state-sent.show {
          display: flex;
        }

        .state-default.hide {
          position: absolute;
          opacity: 0;
        }

        .state-sent svg {
          transform: scale(1.25);
          margin-right: 8px;
        }

        .animated-send-button.sent .state-sent span {
          opacity: 0;
          animation: slideDown 0.8s ease forwards;
          animation-delay: calc(var(--char-index) * 0.2s);
        }

        .animated-send-button.sent .state-sent .button-icon svg {
          opacity: 0;
          animation: appear 1.2s ease forwards 0.8s;
        }

        @keyframes appear {
          0% {
            opacity: 0;
            transform: scale(4) rotate(-40deg);
            filter: blur(4px);
          }
          30% {
            opacity: 1;
            transform: scale(0.6);
            filter: blur(1px);
          }
          50% {
            opacity: 1;
            transform: scale(1.2);
            filter: blur(0);
          }
          100% {
            opacity: 1;
            transform: scale(1);
          }
        }
      `}</style>
      </main>
  )
}

export default Contact
