import { useState } from 'react';

import hitToast from '../helpers/hitToast';

const validEmailReg = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/

export default function SubscriptionForm() {
  const [alertClass, setAlertClass] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target[0].value.trim();

    if (!validEmailReg.test(email)) return setAlertClass('alert-validate');

    fetch('http://103.108.146.90:5000/sendemail', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email })
    }).then(res => res.json())
      .then(data => hitToast(data.success ? 'success' : 'error', data.message))
      .catch(() => hitToast('error', 'Something went wrong. Please try again.',))

    setAlertClass('');
  }

  return (
    <form className="w-full flex-w flex-c-m validate-form" onSubmit={handleSubmit}>
      <div className={`wrap-input validate-input where1 ${alertClass}`} data-validate="Valid email is required: user@email.domain">
        <input className="input placeholder s2-txt2" type="email" name="email" placeholder="Enter Email Address" />
        <span className="focus-input"></span>
      </div>

      <button type="submit" className="flex-c-m size3 s2-txt3 how-btn trans-04 where1">
        Subscribe
      </button>
    </form>
  );
}
