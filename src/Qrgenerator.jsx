import QRCode from 'qrcode'
import { useState } from 'react'

function Qrgenerator() {
	const [url, setUrl] = useState('')
	const [qr, setQr] = useState('')

	const GenerateQRCode = () => {
		QRCode.toDataURL(url, {
			width: 1000,
			margin: 2,
			color: {
				dark: '#335383FF',
				light: '#EEEEEEFF'
			}
		}, (err, url) => {
			if (err) return console.error(err)

			console.log(url)
			setQr(url)
		})
	}

	return (
		<div className="app">
			<h1>Create a custom QR Code in seconds!</h1>
			<input
				type="text"
				placeholder="e.g. https://google.com"
				value={url}
				onChange={e => setUrl(e.target.value)} 
				onKeyDown={(e) => {
					if (e.key === "Enter")
						GenerateQRCode();
				}} />
			<button onClick={GenerateQRCode} >Generate</button>
			{qr && <>
				<img src={qr} />
				<button id="but">
					<a href={qr} download="qrcode.png" variant="outline-primary">Download</a>
				</button>
				
			</>}

		</div>

	)
}

export default Qrgenerator
