import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

/**
 * 현재 프로젝트에서 메인 페이지가 /shop 이므로
 * 해당 /shop 경로로 redirect 설정을 하였습니다.
 */
export function middleware(request: NextRequest) {
  return NextResponse.redirect(new URL("/shop", request.url));
}

export const config = {
  matcher: "/",
};
