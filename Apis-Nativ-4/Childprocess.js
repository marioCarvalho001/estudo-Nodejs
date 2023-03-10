const { spawn } = require('node:child_process');
const ls = spawn('dir', ['..'], { shell: true });

ls.stdout.on('data', (data) => {
  console.log(`stdout: ${data}`);
});

ls.stderr.on('data', (data) => {
  console.error(`stderr: ${data}`);
});

ls.on('close', (code) => {
  console.log(`Processo finalizado ${code}`);
});