// ============================
// Puerto
// ============================
process.env.PORT = process.env.PORT || 3000;

// ============================
// Entorno
// ============================
process.env.NODE_ENV = process.env.NODE_ENV || 'dev';

// ============================
// Base de datos
// ============================
let urlDB;

if (process.env.NODE_ENV === 'dev') {
    urlDB = 'mongodb://localhost:27017/cafe';
} else {
    urlDB = 'mongodb+srv://user:user1234@cluster0.bqfbb.mongodb.net/cafe';
}

// ============================
// Vencimiento del Token
// ============================
// 60 segundos
// 60 minutos
// 30 horas
// 30 dias
process.env.CADUCIDAD_TOKEN = 60 * 60 * 24 * 30;

// ============================
// Seed de autenticacion
// ============================
process.env.SEED_TOKEN = process.env.SEED_TOKEN || 'este-es-el-seed-desarrollo';


process.env.URLDB = urlDB;

// ============================
// Google Client ID
// ============================
process.env.CLIENT_ID = process.env.CLIENT_ID || '193998435901-rmcipvk87tqifceh29cjgaqvibf61shl.apps.googleusercontent.com';