const puppeteer = require('puppeteer');
const path = require('path');

(async () => {
  const htmlPath = path.resolve(__dirname, 'stop-the-bleed.html');
  const pdfPath = path.resolve(__dirname, 'stop-the-bleed.pdf');

  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();

  await page.goto(`file://${htmlPath}`, { waitUntil: 'networkidle0' });

  await page.pdf({
    path: pdfPath,
    format: 'A4',
    printBackground: true,
    displayHeaderFooter: true,
    headerTemplate: '<span></span>',
    footerTemplate: `
      <div style="width:100%;text-align:center;font-size:9pt;color:#888888;font-family:system-ui,sans-serif;padding-bottom:0.5cm;">
        <span class="pageNumber"></span>
      </div>`,
    margin: {
      top: '2.5cm',
      bottom: '2cm',
      left: '2.5cm',
      right: '2.5cm',
    },
  });

  await browser.close();
  console.log(`PDF written to: ${pdfPath}`);
})();
