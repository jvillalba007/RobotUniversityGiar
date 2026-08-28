module.exports = {
  apps: [{
    name: 'rugiar-mcp',
    script: '/home/debian/workspaces/RobotUniversityGiar/.venv/bin/python',
    args: '-m rugiar_mcp.server',
    cwd: '/home/debian/workspaces/RobotUniversityGiar',
    interpreter: 'none',
    env: {
      MCP_PORT: '2082',
      MCP_TRANSPORT: 'streamable-http',
      PYTHONPATH: '/home/debian/workspaces/RobotUniversityGiar'
    },
    autorestart: true,
    max_restarts: 10,
    min_uptime: '10s',
    log_file: '/home/debian/workspaces/RobotUniversityGiar/logs/rugiar-mcp-combined.log',
    out_file: '/home/debian/workspaces/RobotUniversityGiar/logs/rugiar-mcp-out.log',
    error_file: '/home/debian/workspaces/RobotUniversityGiar/logs/rugiar-mcp-error.log',
    log_date_format: 'YYYY-MM-DD HH:mm:ss',
    watch: false,
    max_memory_restart: '1G',
  }]
};
