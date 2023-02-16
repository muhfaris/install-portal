import { pwaInstallHandler } from 'https://unpkg.com/pwa-install-handler@latest?module'

pwaInstallHandler.install()
if ('serviceWorker' in navigator) {
	navigator.serviceWorker.register('service-worker.js')
}
