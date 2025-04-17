import { NodeSSH } from 'node-ssh';

export async function run(inputs, context) {
  const ssh = new NodeSSH();
  try {
    await ssh.connect({
      host: '192.168.1.130',
      username: 'Vision',
      password: 'Footfall2025',
    });
    const result = await ssh.execCommand('python3 /home/Vision/calibrate.py');
    ssh.dispose();
    return {
      success: !result.stderr,
      message: result.stderr || result.stdout
    };
  } catch (err) {
    return { success: false, message: err.message };
  }
}
