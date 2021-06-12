import { TestBed } from '@angular/core/testing';
import { AuthService } from 'src/app/shared/services/auth/auth.service';
import { PermissionsService } from './permissions.service';

describe('PermissionsService', () => {
  let service: PermissionsService;
  let authServiceSpy: jasmine.SpyObj<AuthService>;

  beforeEach(() => {
    authServiceSpy = jasmine.createSpyObj('AuthService', [
      'getDataUserStorage',
    ]);

    TestBed.configureTestingModule({
      providers: [
        PermissionsService,
        { provide: AuthService, useValue: authServiceSpy },
      ],
    });
    service = TestBed.inject(PermissionsService);
  });

  it('can load instance', () => {
    expect(service).toBeTruthy();
  });

  describe('loadPermissionsLocal', () => {
    it('loadPermissionsLocal', () => {
      service.loadPermissionsLocal();

      expect(service.permissionsLocal.length).toBe(0);
    });
  });

  describe('convertPermissions', () => {
    it('convertPermissions', () => {
      const teste = [
        {
          veiw: 'teste',
        },
      ];

      spyOn(service, 'arrayObjectToArrayString').and.callThrough();

      const result = service.convertPermissions(teste, ['teste']);

      expect(result.local).toEqual(['teste']);
      expect(result.local).toEqual(result.database);
      expect(service.arrayObjectToArrayString).toHaveBeenCalledWith(teste);
    });

    it('convertPermissionss', () => {
      const teste = [];

      console.log(teste);
      const result = service.convertPermissions(teste, ['teste']);

      expect(result.local.length).toBeFalsy();
      expect(result.database.length).toBeFalsy();
    });
  });

  describe('isEmpty', () => {
    it('isEmpty', () => {
      const result = service.isEmpty('');

      expect(result).toBe(true);
    });

    it('isEmpty []', () => {
      const result = service.isEmpty([]);

      expect(result).toBe(true);
    });

    it('isEmpty ', () => {
      const result = service.isEmpty('teste');

      expect(result).toBe(false);
    });

    it('isEmpty[]', () => {
      const result = service.isEmpty(['teste', 'teste']);

      expect(result).toBe(false);
    });
  });

  describe('loadPermissionsDatabase', () => {
    it('makes expected calls with response valid', () => {
      const user = {
        claims: ['teste'],
      };

      authServiceSpy.getDataUserStorage.and.returnValues({
        user,
      });

      service.loadPermissionsDatabase();

      expect(service.permissionsDatabase.length).toBe(1);
      expect(authServiceSpy.getDataUserStorage).toHaveBeenCalled();
    });

    it('makes expected calls with response void', () => {
      authServiceSpy.getDataUserStorage.and.returnValues();

      service.loadPermissionsDatabase();
      expect(service.permissionsDatabase.length).toBe(0);
      expect(authServiceSpy.getDataUserStorage).toHaveBeenCalled();
    });
  });

  describe('addPermission', () => {
    it('addPermission', () => {
      const permission = 'teste';

      service.addPermission(permission);

      expect(service.permissionsLocal.length).toBe(1);
      expect(service.permissionsLocal).toEqual([permission]);
    });

    it('addPermissions', () => {
      const permission = ['teste', 'teste1'];

      service.addPermission(permission);

      expect(service.permissionsLocal.length).toBe(2);
      expect(service.permissionsLocal).toEqual(permission);
    });
  });
});
