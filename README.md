# SmarterBot Login Portal

Portal de autenticación para el ecosistema SmarterOS.

## Tecnologías

- Next.js 15
- Clerk Authentication
- Tailwind CSS
- TypeScript

## Configuración

1. Instalar dependencias:
```bash
npm install
```

2. Configurar variables de entorno en `.env.local`:
```
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=tu_publishable_key
CLERK_SECRET_KEY=tu_secret_key
```

3. Ejecutar en desarrollo:
```bash
npm run dev
```

4. Build para producción:
```bash
npm run build
npm start
```

## Servicios SmarterOS

- CRM: https://crm.smarterbot.cl
- ERP: https://erp.smarterbot.cl
- KPI: https://kpi.smarterbot.cl
- Automatización: https://n8n.smarterbot.cl
