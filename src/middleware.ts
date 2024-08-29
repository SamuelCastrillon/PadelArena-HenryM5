import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const googleUserKey = "googleUser";
const regularUserKey = "regularUser";

export async function middleware(request: NextRequest) {
  const googleUserCookie = request.cookies.get(googleUserKey)?.value;
  const regularUserCookie = request.cookies.get(regularUserKey)?.value;
  console.log(regularUserCookie);
  console.log(googleUserCookie);

  let user = null;
  let role = null;

  if (googleUserCookie) {
    try {
      user = JSON.parse(googleUserCookie);
      role = user.role; // Saco el rol del usuario
      console.log("Usuario autenticado (Google):", user);
    } catch (error) {
      console.error("Error al analizar la cookie de Google User:", error);
    }
  } else if (regularUserCookie) {
    // Si no existe la cookie de Google pero existe la de usuario regular
    try {
      user = JSON.parse(regularUserCookie);
      role = user.role; // Saco el rol del usuario
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
    // Verificar rol del usuario
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
      // Rutas prohibidas para usuarios o jugadores
      if (currentPath.startsWith("/dashboard/admin")) {
        console.log(
          `Redirigiendo usuario desde ruta restringida: ${currentPath}`
        );
        return NextResponse.redirect(new URL("/dashboard/user", request.url));
      }
      // Permitir acceso a rutas públicas y dashboard para "jugador"
      if (
        publicRoutes.includes(currentPath) ||
        currentPath.startsWith("/dashboard/user")
      ) {
        console.log(
          `Permitiendo acceso a jugador en ruta pública: ${currentPath}`
        );
        return NextResponse.next();
      }
    }
  }

  // Si el usuario no está autenticado y la ruta no es pública
  if (!user && !publicRoutes.includes(currentPath)) {
    console.log(`Redirigiendo a login desde ruta protegida: ${currentPath}`);
    return NextResponse.redirect(new URL("/login", request.url));
  }

  // Permitir el acceso si no se cumple ninguna de las condiciones anteriores
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
