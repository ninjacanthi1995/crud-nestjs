import { Controller, Get, Request, Post, UseGuards, Param, Patch, CACHE_MANAGER, Inject } from "@nestjs/common";
import { JwtAuthGuard } from './auth/jwt-auth.guard';
import { LocalAuthGuard } from './auth/local-auth.guard';
import { AuthService } from './auth/auth.service';
import { HttpService } from "@nestjs/axios";
import { map, Observable } from "rxjs";
import { UsersService } from "./users/users.service";
import { Cache } from "cache-manager";

@Controller()
export class AppController {
  constructor(
    @Inject(CACHE_MANAGER) private cacheManager: Cache,
    private authService: AuthService,
    private httpService: HttpService,
    private userService: UsersService,
  ) {}

  @UseGuards(LocalAuthGuard)
  @Post('auth/login')
  async login(@Request() req) {
    return this.authService.login(req.user);
  }

  //@UseGuards(LocalAuthGuard)
  @Post('auth/signup')
  async signup(@Request() req) {
    return this.authService.signup(req.body);
  }

  @UseGuards(JwtAuthGuard)
  @Get('product/:id')
  async getSingleProduct(@Request() req, @Param() params) {
    const value = await this.cacheManager.get(params.id)
    if (value) {
      return JSON.parse(<string>value)
    } else {
      return this.httpService.get(`https://world.openfoodfacts.org/api/v0/product/${params.id}.json`)
        .pipe(map(async response => {
          await this.cacheManager.set(params.id, JSON.stringify(response.data), { ttl: 1000 });
          return response.data;
        }))
    }
  }

  @UseGuards(JwtAuthGuard)
  @Patch('user/:id')
  async updateUser(@Request() req, @Param() params) {
    const password = req.body.password ? req.body.password : null;
    const username = req.body.username ? req.body.username : null;
    return this.userService.updateOne(params.id, username, password)
  }
}
