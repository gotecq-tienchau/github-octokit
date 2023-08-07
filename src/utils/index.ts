import path from 'path';
import winston from 'winston';
import 'winston-daily-rotate-file';

const logger = winston.createLogger({
    level: 'info',
    format: winston.format.json(),
    transports: [
        new winston.transports.DailyRotateFile({
            level: 'info',
            filename: '%DATE%.log',
            maxFiles: '1d',
            dirname: path.join(process.cwd(), 'logs', 'info'),
        }),
        new winston.transports.DailyRotateFile({
            level: 'error',
            filename: '%DATE%.log',
            maxFiles: '1d',
            dirname: path.join(process.cwd(), 'logs', 'error'),
        }),
    ],
});

export { logger };
