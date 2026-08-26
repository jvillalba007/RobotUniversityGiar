module.exports = {
  apps: [{
    name: 'rugiar',
    script: '/home/debian/workspaces/RobotUniversityGiar/.venv/bin/python',
    args: 'legged_gym/scripts/rugiar_driver.py --control_port 9017 --viser_port 9006',
    cwd: '/home/debian/workspaces/RobotUniversityGiar',
    interpreter: 'none',
    env: {
      SIMULATOR: 'genesis',
      GENESIS_BACKEND: 'cpu',
      PYTHONPATH: '/home/debian/workspaces/RobotUniversityGiar'
    },
    autorestart: true,
    max_restarts: 10,
    min_uptime: '10s',
    log_file: '/home/debian/workspaces/RobotUniversityGiar/logs/rugiar-combined.log',
    out_file: '/home/debian/workspaces/RobotUniversityGiar/logs/rugiar-out.log',
    error_file: '/home/debian/workspaces/RobotUniversityGiar/logs/rugiar-error.log',
    log_date_format: 'YYYY-MM-DD HH:mm:ss',
    watch: false,
    max_memory_restart: '3G',
  }]
};
