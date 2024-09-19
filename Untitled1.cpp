#include <iostream>
using namespace std;

class PhanSo {
    private:
        int tu, mau;

    public:
        PhanSo() : tu(0), mau(1) {}

        PhanSo(int tu, int mau) : tu(tu), mau(mau) {
            if (mau == 0) {
                cout << "Mau so khong the bang 0. Ðat mau so thanh 1." << endl;
                this->mau = 1;
            }
        }

        void NhapPS() {
            cout << "Nhap tu so: ";
            cin >> tu;
            cout << "Nhap mau so: ";
            cin >> mau;
            if (mau == 0) {
                cout << "Mau so khong the bang 0. Dat mau sot thanh 1." << endl;
                mau = 1;
            }
        }

        void InPS() const {
            cout << tu << "/" << mau << endl;
        }

        PhanSo Cong(const PhanSo& ps) const {
            int tuMoi = tu * ps.mau + mau * ps.tu;
            int mauMoi = mau * ps.mau;
            return PhanSo(tuMoi, mauMoi);
        }

        PhanSo Tru(const PhanSo& ps) const {
            int tuMoi = tu * ps.mau - mau * ps.tu;
            int mauMoi = mau * ps.mau;
            return PhanSo(tuMoi, mauMoi);
        }

        PhanSo Nhan(const PhanSo& ps) const {
            int tuMoi = tu * ps.tu;
            int mauMoi = mau * ps.mau;
            return PhanSo(tuMoi, mauMoi);
        }

        PhanSo Chia(const PhanSo& ps) const {
            int tuMoi = tu * ps.mau;
            int mauMoi = mau * ps.tu;
            return PhanSo(tuMoi, mauMoi);
        }
};

int main() {
    PhanSo ps1, ps2;
    cout << "Nh?p phân s? th? nh?t:" << endl;
    ps1.NhapPS();
    cout << "Nh?p phân s? th? hai:" << endl;
    ps2.NhapPS();

    PhanSo tong = ps1.Cong(ps2);
    PhanSo hieu = ps1.Tru(ps2);
    PhanSo tich = ps1.Nhan(ps2);
    PhanSo thuong = ps1.Chia(ps2);

    cout << "T?ng: "; tong.InPS();
    cout << "Hi?u: "; hieu.InPS();
    cout << "Tích: "; tich.InPS();
    cout << "Thuong: "; thuong.InPS();

    return 0;
}
