import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// Definición de claves de cookies
const googleUserKey = "googleUser";
const regularUserKey = "regularUser";

export async function middleware(request: NextRequest) {
  // Obtener las cookies del usuario de Google y del usuario regular
  const googleUserCookie = request.cookies.get(googleUserKey)?.value;
  const regularUserCookie = request.cookies.get(regularUserKey)?.value;
  console.log(regularUserCookie);
  console.log(googleUserCookie);

  let user = null;
  let role = null;

  // Si existe la cookie de Google, la mira
  if (googleUserCookie) {
    try {
      user = JSON.parse(googleUserCookie); // Analiza la cookie de Google
      role = user.role; // saco el rol del usuario
      console.log("Usuario autenticado (Google):", user);
    } catch (error) {
      console.error("Error al analizar la cookie de Google User:", error);
    }
  } else if (regularUserCookie) {
    // Si no existe la cookie de Google pero existe la de usuario regular
    try {
      user = JSON.parse(regularUserCookie); // veo la cookie de usuario regular
      role = user.role; // saco el rol del usuario
      console.log("Usuario autenticado (Regular):", user);
    } catch (error) {
      console.error("Error al analizar la cookie de Regular User:", error);
    }
  }

  // Rutas públicas permitidas sin estar autenticado
  const publicRoutes = [
    "/login",
    "/register",
    "/",
    "/home",
    "/news",
    "/tournaments",
  ];

  const currentPath = request.nextUrl.pathname;

  // Si el usuario está autenticado
  if (user) {
    // Si el usuario intenta acceder a una ruta pública, redirigir al dashboard del usuario
    if (publicRoutes.includes(currentPath)) {
      console.log(
        `Redirigiendo autenticado desde ruta pública: ${currentPath}`
      );
      return NextResponse.redirect(
        new URL("/dashboard/user/profile", request.url)
      );
    }

    // Verificar rol del user
    if (role === "admin") {
      // Rutas prohibidas para admins
      const userRestrictedRoutes = ["/dashboard/user"];

      if (userRestrictedRoutes.some((route) => currentPath.startsWith(route))) {
        console.log(
          `Redirigiendo administrador desde ruta restringida: ${currentPath}`
        );
        return NextResponse.redirect(new URL("/dashboard/admin", request.url));
      }
    } else if (role === "user" || role === "jugador") {
      // Rutas prohibidas para usuarios
      if (currentPath.startsWith("/dashboard/admin")) {
        console.log(
          `Redirigiendo usuario desde ruta restringida: ${currentPath}`
        );
        return NextResponse.redirect(new URL("/dashboard/user", request.url));
      }
    }
  }

  //si el user no tiene token y la ruta es publica lo llevo a
  if (!user && !publicRoutes.includes(currentPath)) {
    console.log(`Redirigiendo a login desde ruta protegida: ${currentPath}`);
    return NextResponse.redirect(new URL("/login", request.url));
  }

  // aca permito el accceso
  console.log(`Permitiendo acceso a: ${currentPath}`);
  return NextResponse.next();
}

export const config = {
  matcher: [
    "/register",
    "/login",
    "/home",
    "/news",
    "/tournaments",
    "/",
    "/dashboard/:path*",
    "/auth/:path*",
  ],
};
