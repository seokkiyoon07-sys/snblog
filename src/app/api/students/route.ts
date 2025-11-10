import { NextRequest, NextResponse } from 'next/server';
import Papa from 'papaparse';

interface Student {
  studentId: string;
  name: string;
  phone: string;
  examLocation: string;
  studyRoom: string;
  studySeat: string;
  dormBuilding: string;
  dormRoom: string;
  secondLanguage: string;
  notes: string;
}

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const name = searchParams.get('name');
    const phone = searchParams.get('phone');
    const masterPassword = searchParams.get('master');

    // 환경변수에서 CSV 데이터 읽기
    const csvData = process.env.STUDENTS_CSV_DATA;
    const masterPass = process.env.MASTER_PASSWORD || 'sn2025';

    if (!csvData) {
      console.error('STUDENTS_CSV_DATA environment variable is not set');
      return NextResponse.json(
        { error: '학생 정보를 불러올 수 없습니다. 관리자에게 문의하세요.' },
        { status: 500 }
      );
    }

    // CSV 파싱
    const parseResult = Papa.parse(csvData, {
      header: true,
      skipEmptyLines: true,
      transformHeader: (header: string) => header.trim(),
    });

    if (parseResult.errors.length > 0) {
      console.error('CSV parsing errors:', parseResult.errors);
      return NextResponse.json(
        { error: '데이터 형식 오류가 발생했습니다' },
        { status: 500 }
      );
    }

    const students = parseResult.data as Student[];

    // 마스터 비밀번호로 전체 조회
    if (masterPassword) {
      if (masterPassword === masterPass) {
        return NextResponse.json({ students }, { status: 200 });
      } else {
        return NextResponse.json(
          { error: '비밀번호가 올바르지 않습니다.' },
          { status: 401 }
        );
      }
    }

    // 일반 학생 검색
    // 입력 검증
    if (!name || !phone) {
      return NextResponse.json(
        { error: '이름과 전화번호를 입력해주세요' },
        { status: 400 }
      );
    }

    // 전화번호 4자리 검증
    if (phone.length !== 4 || !/^\d{4}$/.test(phone)) {
      return NextResponse.json(
        { error: '전화번호 뒷자리 4자리를 정확히 입력해주세요' },
        { status: 400 }
      );
    }

    // 학생 검색 (이름 + 전화번호 뒷자리 매칭)
    const student = students.find(
      (s: Student) =>
        s.name?.trim() === name.trim() && s.phone?.trim() === phone.trim()
    );

    if (!student) {
      return NextResponse.json(
        {
          error:
            '일치하는 학생 정보가 없습니다. 이름과 전화번호를 다시 확인해주세요.',
        },
        { status: 404 }
      );
    }

    // 성공 응답
    return NextResponse.json(student, { status: 200 });
  } catch (error) {
    console.error('Student search error:', error);
    return NextResponse.json(
      { error: '서버 오류가 발생했습니다. 잠시 후 다시 시도해주세요.' },
      { status: 500 }
    );
  }
}
